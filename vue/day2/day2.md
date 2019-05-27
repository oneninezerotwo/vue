# 脚手架

https://cli.vuejs.org/

全局安装
```bash
npm install -g @vue/cli
```
安装完，会在全局有vue命令
```bash
vue -V
```
创建项目
```bash
vue create weibo
```

定位到该文件夹
```
cd weibo
```

启动服务器
```
npm run serve
```

# axios

```js
// POST请求
// https://github.com/Wscats/vue-tutorial/issues/16
```


# webpack

webpack其实是require.js和gulp的后端实现方案

webpack = require.js + gulp

webpack想做模块化和资源整理处理压缩

定义模块
```js
define()       //require.js
module.exports //ES5
export
```

引入模块
```js
require()
require()
import
```

## 安装
```bash
npm install webpack webpack-cli -g
```
全局里面会有一个命令`webpack`

# webpack

全局安装，cmd会有webpack命令
```bash
npm install webpack -g
npm install webpack-cli -g
```
本地再装一次
```bash
npm install webpack
```

# 配置文件

新建一份`webpack.config.js`配置文件

四大概念

- 入口(entry)
- 出口(output)
- loader // 专门处理各种类型文件的插件
- 插件(plugins)  //专门帮你压缩重命名合并的插件

```js
// 内置模块
const path = require('path');

// 自定义模块
module.exports = {
    // 输入
    entry: './src/index.js',
    // 输出
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    }
};
```

entry和output是我们webpack的必选项


# 运行

在命令行了里面执行`webpack`，然后在dist文件夹新建一份`index.html`去执行bundle.js文件

webpack的原理

- 闭包的原理
- eval

# 虚拟DOM

[React JSX语法](https://github.com/Wscats/react-tutorial/issues/12)

# 思路

你在entry这里配置好输入文件，然后利用node的模块化，把JS逻辑分开写module.export导出，然后用require引入

最后在命令行里面执行webpack打包成一条JS文件

