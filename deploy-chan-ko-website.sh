#!/bin/bash
# Deploys the Chan-Ko website to a Google Cloud Platform GCE instance

set -e

DOMAIN="$1"
CERTBOT_EMAIL="$2"
GCE_INSTANCE_NAME="$3"
GCE_ZONE="$4"

if ! gcloud compute instances describe "$GCE_INSTANCE_NAME" --zone="$GCE_ZONE"; then
  gcloud compute instances create "$GCE_INSTANCE_NAME" \
    --zone="$GCE_ZONE" \
    --machine-type=e2-micro \
    --tags=http-server,https-server \
    --metadata=startup-script='#! /bin/bash
      apt-get update
      apt-get install -y nginx certbot python3-certbot-nginx
      systemctl enable nginx
      systemctl start nginx
    '
fi

echo "Waiting for instance to be ready..."
sleep 90

echo "Ensure nginx is installed and running"
gcloud compute ssh "$GCE_INSTANCE_NAME" --zone="$GCE_ZONE" --command="
  if ! command -v nginx &> /dev/null; then
    sudo apt-get update
    sudo apt-get install -y nginx certbot python3-certbot-nginx
  fi
  sudo systemctl enable nginx
  sudo systemctl start nginx
  sudo mkdir -p /var/www/html
  sudo chown -R \$(whoami):\$(whoami) /var/www/html

  echo 'Obtaining SSL certificate'
  if sudo certbot certificates | grep -q '$DOMAIN'; then
    echo 'Certificate for $DOMAIN already exists. Attempting renewal if necessary.'
    sudo certbot renew --nginx --non-interactive
  else
    echo 'No certificate found for $DOMAIN. Creating a new one.'
    sudo certbot --nginx -d '$DOMAIN' --non-interactive --agree-tos --email '$CERTBOT_EMAIL'
  fi
"

echo "Copying files..."
gcloud compute scp --recurse --zone="$GCE_ZONE" packages/chan-ko-website/dist/* "$GCE_INSTANCE_NAME":/var/www/html/

echo "Setting permissions and updating Nginx config..."
gcloud compute ssh "$GCE_INSTANCE_NAME" --zone="$GCE_ZONE" --command="
  sudo chown -R www-data:www-data /var/www/html

  echo 'Updating Nginx config to force HTTPS'
  cat << EOF | sudo tee /etc/nginx/sites-available/default
server {
    listen 80;
    server_name $DOMAIN;
    return 301 https://\$server_name\$request_uri;
}

server {
    listen 443 ssl;
    server_name $DOMAIN;

    ssl_certificate /etc/letsencrypt/live/$DOMAIN/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/$DOMAIN/privkey.pem;

    root /var/www/html;
    index index.html;

    location / {
        try_files \$uri \$uri/ =404;
    }
}
EOF

  echo 'Nginx configuration created. Checking syntax...'
  sudo nginx -t

  if [ \$? -eq 0 ]; then
    echo 'Nginx syntax is correct. Restarting Nginx...'
    sudo systemctl restart nginx
  else
    echo 'Nginx syntax check failed. Printing configuration file:'
    cat /etc/nginx/sites-available/default
    exit 1
  fi

  echo 'Nginx status:'
  sudo systemctl status nginx
"

gcloud compute ssh "$GCE_INSTANCE_NAME" --zone="$GCE_ZONE" --command="sudo mkdir -p /var/www/html && sudo chown -R \$(whoami):\$(whoami) /var/www/html"
gcloud compute scp --recurse --zone="$GCE_ZONE" packages/chan-ko-website/dist/* "$GCE_INSTANCE_NAME":/var/www/html/
gcloud compute ssh "$GCE_INSTANCE_NAME" --zone="$GCE_ZONE" --command="sudo systemctl restart nginx"
