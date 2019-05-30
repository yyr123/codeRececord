#!/usr/bin/env sh

# 终止一个错误
set -e
# 构建
npm run build

# 进入生成的构建文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'init project'

git push -f git@github.com:hz199/mt-blog.git master

cd -