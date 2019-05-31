const path = require('path');
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
    }
};