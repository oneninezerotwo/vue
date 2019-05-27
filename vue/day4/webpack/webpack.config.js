// require
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// 导出对象
module.exports = {
    // 设置环境变量development或者production 影响你这个文件(min)的引入
    mode: "development",
    // 定义入口 建议使用相对路径 这份文件将会引入被webpack后续给打包
    entry: './input/index.js',
    // 定义出口文件
    output: {
        // 输出的文件夹路径
        path: path.resolve(__dirname, 'output'),
        // 定义输出的文件名
        filename: 'bundle.js'
    },
    // loader加载器，处理非JS类型的文件
    // loader文档 https://www.webpackjs.com/loaders
    module: {
        rules: [
            // 匹配到css文件用style和css-loader来处理
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // 帮你处理一些ES6的代码，然后降级，做代码兼容
            {
                test: /\.js$/,
                // 不去处理node_modules|bower_components文件夹里面的JS
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            // 处理html文件的
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },
            //   处理vue文件
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            // 处理图片格式
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin(),
        // 压缩JS代码
        new UglifyJsPlugin()
    ]
};