首先，为了能够使用vue，需要先安装vue
安装命令为：npm install vue --save
因为vue在运行时也要依赖，因此不加-dev
然后，在main.js中导入
import Vue from 'vue'
此句相当于原来的<script src='vue.js'></script>

在编译运行的时候，会提示当前模式是runtime-only模式，为了能够正常
运作，需要更改为template模式，在webpack.config.js中添加属性：
resolve:{
            alias:{
                'vue$':'vue/dist/vue.esm.js'
            }
        }
即可

最后，为了能够正常的加载vue需要安装vue-loader
安装命令是：
npm install --save -dev vue-loader vue-template-compiler
安装完成之后，还需要在webpack.config.js中添加配置：
{
    test: /\.vue$/,
    use: ['vue-loader']
}
将vue-loader版本更改为14：
npm i -D vue-loader@14