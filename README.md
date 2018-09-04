#ws-common

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
    
    
    
