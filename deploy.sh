#!/bin/sh
# Build the static site and force-push it to the gh-pages branch.
# GitHub Pages serves that branch at https://viewaro.itquotes.hr.
set -eu

cd "$(dirname "$0")"

npm run build

echo "viewaro.itquotes.hr" > out/CNAME
touch out/.nojekyll

cd out
rm -rf .git
git init -q -b gh-pages
git add -A
git commit -q -m "deploy $(date -u +%Y-%m-%dT%H:%M:%SZ)"
git push -f https://github.com/filipbob/viewaro-web.git gh-pages
rm -rf .git

echo "Deployed."
