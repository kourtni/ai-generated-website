#!/usr/bin/env bash

set -e

CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo -e "\033[0;32m### Current branch is ${CURRENT_BRANCH} ###\033[0m"

# Uncomment the pre-commit check below if this is your local dev environment.
# if [[ "${CURRENT_BRANCH}" == "main" ]]; then
# echo -e "\033[0;31m### You are not allowed to commit to the main branch! ###\033[0m";
# exit 1;
# fi
# echo -e "\033[0;32m### You are allowed to commit to the ${CURRENT_BRANCH} branch! ###\033[0m";

# Delete this echo statement if you are in local dev environment.
echo -e "\033[0;31m### Please delete this statement and uncomment the pre-commit ###
### code above if this is your local dev environment. ###
### If you're confused see ./scripts/prevent-main-commits.sh\033[0m"
