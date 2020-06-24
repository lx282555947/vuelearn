首先，需要安装webpack的依赖环境nodejs
安装完后可使用命令 npm -v 来查看nodejs 的版本
然后利用npm工具对webpack进行安装
安装命令为：npm install webpack@3.6.0 -g
-g代表全局安装


其次，创建main.js作为所有js的入口
在main.js中引入其他的js，因此需要所有js模块化
模块化可使用commonjs的规范，也可以使用es6的规范
commonjs的导出规范：
module.exports={
    属性名，函数名。。。。。
}
commonjs的导入规范：
require('js相对路径')

es6的导出规范：
export {
    属性名，函数名。。。。
}
es6的导入规范
import {属性名,函数名。。。。} from 'js的相对路径'

最后通过webpack打包生成最终的bundle.js
打包命令是：webpack ./src/main.js ./dist/bundle.js
在index.html中引入即可
