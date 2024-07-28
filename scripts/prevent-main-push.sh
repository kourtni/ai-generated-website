#!/usr/bin/env bash

set -e

PROTECTED_BRANCH='main'
CURRENT_BRANCH=$(git symbolic-ref HEAD | sed -e 's,.*/\(.*\),\1,')

if [ $PROTECTED_BRANCH = $CURRENT_BRANCH ]
then
    echo "\033[0;31m## ${PROTECTED_BRANCH} is a protected branch, create a PR to merge\033[0m"
    exit 1 # push will not execute
else
    echo "\033[0;32m## It is safe to push to the ${CURRENT_BRANCH} branch.\033[0m"
    exit 0 # push will execute
fi
