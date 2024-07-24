// Footer.tsx
import React from 'react';
import styles from './Footer.module.css';
import {Facebook, Twitter, Linkedin, Instagram} from 'lucide-react';

const GetVersion = () => {
  if (import.meta.env.VITE_ENVIRONMENT !== 'prod') {
    return import.meta.env.VITE_VERSION + '-' + import.meta.env.VITE_ENVIRONMENT;
  } else {
    return import.meta.env.VITE_VERSION;
  }
}

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.socialLinks}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram />
          </a>
        </div>
        <p className={styles.copyright}>
        Build: {GetVersion()} | &copy; {new Date().getFullYear()} Chan-Ko LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
