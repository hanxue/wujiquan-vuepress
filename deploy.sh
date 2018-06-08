#!/usr/bin/env sh

# abort on errors
set -e

# build
rm -rf docs/.vuepress/dist
yarn run build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'v.wujiquan.net' > CNAME

git init
git add -A
isodate=`date -u +"%Y-%m-%d %H-%M-%SZ"`
git commit -m "[vuepress] last generated on $isodate"

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:hanxue/wujiquan-vuepress.git master:gh-pages

cd -
