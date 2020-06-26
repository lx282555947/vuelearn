1、将开发和生产所需的配置进行文件分离
2、为了能够在编译的时候合并base.config.js和分离的文件，需要安装webpack-merge
npm install --save -dev webpack-merge
3、在各自的环境文件中合并
4、在package.json中更改配置：
"build": "webpack --config ./build/prod.config.js",
"dev": "webpack-dev-server --open --config ./build/dev.config.js"