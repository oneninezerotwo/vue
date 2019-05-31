const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    mode: 'development',
    // 入口
    entry: './src/index.js',
    // 出口
    output: {
        // 输出的路径
        path: path.resolve(__dirname, 'dist'),
        // 输出的文件名字
        filename: 'bundle.js'
    },
    // 加载器
    module: {
        rules: [
            // 匹配到所有css后缀的文件，用css-loader处理
            { test: /\.(html|htm)$/, use: 'html-loader' },
            { test: /\.ts$/, use: 'ts-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            // 把图片压进js代码里面
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
            // 帮你出.omi文件
            { test: /\.omi$/, use: 'omil' },
            { test: /\.vue$/, use: 'vue-loader' },
        ]
    },
    // 必须
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ]
};