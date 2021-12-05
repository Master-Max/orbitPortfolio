#!/usr/bin/env sh

# abort on errors

set -e

# build

npm run build

# navigate to the build output directory

cd dist

git init
git add -A
git commit -m 'deploy'

cd -

