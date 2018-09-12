# ws-common

## 概述

ws-common是基于angular6框架设计的前端公共工程、根据以往网管项目中经验总结归纳出的解决项目中通用问题、技术难点的方案。

## 原理

ws-common工程使用【ng-packagr】( https://github.com/dherges/ng-packagr )完成打包构建，
使用ng-packagr构建出来的包和其他第三方的package没有任何区别；

## 开发目录
```
|- build-scripts                // 持续集成脚本
|- dist                         // 编译打包目录 
|- src                          //
    |- common                   // ws-common模板源码
        |- component            // 通用组件
        |- const                // 通用全局常量
        |- directive            // 通用指令
        |- enum                 // 通用枚举
        |- model                // 通用模型
        |- pipe                 // 通用管道
        |- service              // 通用服务
        |- util                 // 公共工具类
        |- common.module.ts     // WsCommonModule
    |- assets                   // WsCommonModule模板资源文件
        |- i18n                 // 国际化资源
        |- img                  // 图片资源
    |- app                      //
|- ng-packagr.json              // ng-packagr.json 打包配置文件
|- README.MD                    // 说明文档
|- ......
```

## 环境
    node v10.1.0
    yarn v1.9.4
    npm v5.6.0

## 通用问题解决方案

### 创建工程脚本
    ng new xxx --skip-install --style=scss --skip-tests --prefix ws

### 解决node-sass安装失败（
    如果淘宝镜像被屏蔽，请看这儿 https://blog.csdn.net/bug_zero/article/details/65968959 ）
    把下载源指定为cnpm仓库，
        npm config set registry http://registry.npm.taobao.org
        yarn config set registry http://registry.npm.taobao.org
    指定node-sass的下载源
        npm config set sass-binary-site http://npm.taobao.org/mirrors/node-sass
        yarn config set sass-binary-site http://npm.taobao.org/mirrors/node-sass


### 解决git push403问题
    地址： https://www.jianshu.com/p/77b0340a02f3


### 发布步骤
    1，首先需要依赖ng-packagr包
        yarn add ng-packagr --dev
    2,添加ng-package.json和public_api.ts文件。
        ng-package.json中添加 whitelistedNonPeerDependencies 定义 peerDependencies中依赖。
        public_api.ts中导出WsCommonModule和其他类
    3，需要发布时，运行build-scripts对应脚本即可。
    
### 设置Chrome浏览器跨域

    Chrome快捷方式 -> 目标 末尾增加 "--disabled-web-security --user-data-dir"

### 配置ES版本
    webstorm: File -> Settings -> Languages & Frameworks -> Javascript language version: ECMAScript6
    
### 配置TSLint
    webstorm: File -> Settings -> Languages & Frameworks -> Typescripts -> TSLint 
