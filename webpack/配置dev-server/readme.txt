安装本地服务器：
npm install --save -dev webpack-dev-server@2.9.3
webpack.config.js添加配置：
devServer: {
        contentBase: './dist',
        inline: true
    }

package.json添加配置：
"dev": "webpack-dev-server"

以后就能够使用npm run dev
