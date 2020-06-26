// 配置webpack 打包数据源和打包后的输出路径
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
        // publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 51920,
                            name: 'imgs/[name].[hash:8].[ext]'
                        },
                    },
                ],
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new UglifyWebpackPlugin()
    ]
}