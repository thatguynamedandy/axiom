#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

openssl aes-256-cbc -K $encrypted_6e634bd6cce3_key -iv $encrypted_6e634bd6cce3_iv -in deploy_key.enc -out deploy_key -d
chmod 600 deploy_key
eval `ssh-agent -s`
ssh-add deploy_key

git config --global user.email "$COMMIT_AUTHOR_EMAIL"
git config --global user.name "$COMMIT_AUTHOR_NAME"

# We only want to deploy to gh-pages when on master
if [ "$TRAVIS_PULL_REQUEST" == "true" ]; then
    BRANCH=$TRAVIS_BRANCH yarn gh-pages-pr
fi

if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    yarn gh-pages
fi
