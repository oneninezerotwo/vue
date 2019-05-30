# 安装

gulp全局安装 gulp的命令

webpack webpack的命令

全局和本地安装都要各安装一次
```bash
cnpm install webpack webpack-cli
cnpm install webpack webpack-cli -g
yarn add webpack --global
```

# 四个核心概念

- 入口(entry)
- 输出(output)
- loader
- 插件(plugins)

# 配置文件

先新建一个`webpack.config.js`文件

相当于`gulpfile.js`

# 定义出口和入口


```js
// require
const path = require('path');
// 导出对象
module.exports = {
    // 定义入口 建议使用相对路径 这份文件将会引入被webpack后续给打包
    entry: './input/index.js',
    // 定义出口文件
    output: {
        // 输出的文件夹路径
        path: path.resolve(__dirname, 'output'),
        // 定义输出的文件名
        filename: 'bundle.js'
    }
};
```

# 编译

在`webpack.config.js`的目录下终端中执行`webpack`的命令

编译成功后，在`output`文件下会生成`bundle.js`，这份文件就是被`webpack`给打包成功的文件