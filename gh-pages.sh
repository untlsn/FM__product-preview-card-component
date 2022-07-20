#!/usr/bin/env sh

set -e
pnpm build

cd ./dist

git init
git checkout -B main
git add -A
git commit -m 'deploy'

git push -f git@github.com:untlsn/FM__product-preview-card-component.git main:gh-pages
