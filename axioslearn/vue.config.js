// const path = require('path');
//
// function resolve(dir) {
//     return path.join(__dirname, dir)
// }
module.exports = {
    lintOnSave: false,
    devServer: {
        // watchOptions: {
        //     ignored: ['/node_modules/', '/src/api/'],
        //     poll: 1200,
        // },
        proxy: {
            '/api': {
                target:'http://localhost:8080',
                changeOrigin: true,
                pathRewrite: {'^/api' : ''}
            }
        }
    }
}
