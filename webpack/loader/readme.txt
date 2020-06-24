首先，为了加载css样式，需要使用style、css的样式加载器
通过
npm install style-loader --save-dev
和
npm install css-loader --save-dev
两个命令分别进行安装
最后，在webpack.config.js中添加配置：
module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
即可。