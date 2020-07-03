// const path = require('path');
//
// function resolve(dir) {
//     return path.join(__dirname, dir)
// }
// module.exports = {
//     lintOnSave: false,
//     devServer: {
//         // watchOptions: {
//         //     ignored: ['/node_modules/', '/src/api/'],
//         //     poll: 1200,
//         // },
//         proxy: {
//             '/tartan': {
//                 // target: 'http://192.168.0.91:9050/', //后端接口地址
//                 // target: 'http://47.103.20.175/', //后端接口地址
//                 target: 'http://localhost:7020',
//                 changeOrigin: true, //是否允许跨越
//                 pathRewrite: {
//                     '^/tartan': '/tartan', //重写,
//                 }
//             }
//         }
//     }
// }
