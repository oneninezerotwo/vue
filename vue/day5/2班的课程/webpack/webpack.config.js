const path = require('path');
// 模板
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// 生成html
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // min 和 源文件
    mode: 'development',
    // 入口
    entry: './src/index.js',
    // 出口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[hash].js'
    },
    // 加载器
    module: {
        rules: [
            // 匹配所有css后缀的文件，并且交给css-loader去处理
            {
                test: /\.css$/,
                // use: [
                //     { loader: 'style-loader' },
                //     { loader: 'css-loader' }
                // ],
                use: ['style-loader', 'css-loader']
            },
            { test: /\.ts$/, use: 'ts-loader' },
            // {
            //     test: /\.(png|jpg|gif)$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 emitFile: true
            //             }
            //         }
            //     ]
            // },
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
            },
            {
                test: /\.(htm|html)$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            }
        ]
    },
    // 插件
    plugins: [
        // new UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            template: './template/index.html'
        })
    ]
};