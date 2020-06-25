首先，在加载img的时候，需要使用url-loader来加载
安装url-loader：npm install url-loader --save-dev
然后，在webpack.config.js里面添加配置：
{
    test: /\.(png|jpg|gif)$/i,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
    ],
},
1、当加载图片大小小于limit的值的时候，会将图片转化为base64展示在页面中
2、当加载图片大小大于limit的值的时候，会需要额外的file-loader来加载，
安装file-loader的命令为：npm install file-loader --save-dev
file-loader在加载图片的时候，会将图片放在指定的路径下，从而可能导致页面加载的
img url与实际图片的路径不一致，需要在webpack.config.js中添加配置publicpath，
从新指定图片的url地址。
为了让图片存放在指定路径，并以一定格式对图片进行命名，可在options里面添加name属性即可，
详细参考webpack.config.js