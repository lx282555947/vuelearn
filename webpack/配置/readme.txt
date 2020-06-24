为了不用每次打包都输入源文件路径和输出路径，可使用配置文件对路径进行配置
首先，创建webpack的config文件，名字必须为webpack.config.js，参照该文件
通过entry和output来配置源文件路径和输出路径

然后，因为路径使用绝对路径配置不够灵活，需要自动获取相对路径，则需要用到
nodejs中的path模块来获取相对路径。
为了获取path模块，需要初始化nodejs，生成package.json,命令为：npm -init
随后就可以通过path.resolve的方法获取路径

最后，为了能完全使用npm 命令简化webpack，可以在package,json中的scripts中
配置build:'webpack'，以后在打包的时候就可以使用命令：npm run build

注：使用npm来管理还可以在打包的时候优先访问本地的webpack，安装本地webpack的命令是：
npm install wenpack@3.6.0 --save -dev
安装完成之后，package.json中会增加：
"dependencies": {
    "webpack": "^3.6.0"
}
