#!/usr/bin/env bash

cd ../

# 安装依赖
yarn
if [ $? == 0 ]
then echo "version patch success!"
else
echo "version patch failed!"
exit
fi

# 升级版本
npm version patch
if [ $? == 0 ]
then echo "version patch success!"
else
echo "version patch failed!"
exit
fi

# 打包
npm run package
if [ $? == 0 ]
then echo "npm run packge success!"
else
echo "npm run package failed!"
exit
fi

# 发布
npm publish dist
if [ $? == 0 ]
then echo "npm publish dist success!"
else
echo "npm publish dist failed!"
exit
fi

