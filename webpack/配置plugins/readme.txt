安装插件
1、html-webpack-plugin
npm install html-webpack-plugin --save -dev
2、uglifyjs-webpack-plugin
npm install uglifyjs-webpack-plugin@1.1.1 --save -
3、在webpack.config.js中引入并添加配置：

const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');

plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new UglifyWebpackPlugin()
    ]

