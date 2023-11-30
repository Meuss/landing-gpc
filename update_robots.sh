#!/bin/bash

# Check if the current branch is 'staging'
if [ "$BRANCH" == "staging" ]; then
    # Delete existing robots.txt in the static directory
    rm -f ./static/robots.txt

    # Copy the staging-specific robots.txt to the static directory
    cp ./robots-staging.txt ./static/robots.txt
fi
