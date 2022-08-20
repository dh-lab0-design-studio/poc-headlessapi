#!/usr/bin/env bash
cd ./frontend1
npm run build
rm -rfv ../POCHeadLess.MinimalAPI.Backend/wwwroot/frontend1
mkdir -pv ../POCHeadLess.MinimalAPI.Backend/wwwroot/frontend1
cp -Rv ./dist/* ../POCHeadLess.MinimalAPI.Backend/wwwroot/frontend1