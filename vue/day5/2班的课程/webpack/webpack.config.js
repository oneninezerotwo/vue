const path = require('path');
module.exports = {
    mode: 'production',
    // 入口
    entry: './src/index.js',
    // 出口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
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
            }
        ]
    }
};