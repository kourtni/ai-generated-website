#!/usr/bin/env bash

# Get today's UTC date in the required format
TODAY=$(date -u +"%y.%m.%d")

# Get the latest tag for today's date
LATEST_TAG=$(git tag -l "v$TODAY.*" | sort -V | tail -n 1)

if [ -z "$LATEST_TAG" ]; then
    # No tag exists for today, so we'll use .01
    NEW_TAG="v$TODAY.01"
else
    # Extract the build number and increment it
    BUILD_NUMBER=$(echo $LATEST_TAG | awk -F. '{print $4}')
    NEW_BUILD_NUMBER=$(printf "%02d" $((10#$BUILD_NUMBER + 1)))
    NEW_TAG="v$TODAY.$NEW_BUILD_NUMBER"
fi

# Create the new tag
git tag $NEW_TAG

echo "Created new tag: $NEW_TAG"

# Optionally, push the tag to the remote repository
# Uncomment the next line if you want to automatically push the tag
# git push origin $NEW_TAG
