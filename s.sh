#!/bin/zsh

rm -rf public
hugo
git add -A
git commit -m "automated commit"
git push -u origin master
