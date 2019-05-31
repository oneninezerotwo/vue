# webpack

> (自定义模块+内置模块+第三方模块) =webpack=> 静态资源

- 打包
- 多变少(有可能只留下一个)(文件数，文件后缀，文件大小)
- 多模块变少模块(压缩，转化)

webpack = gulp + requirejs

是gulp(node)和requirejs(浏览器环境)的替代方案

webpack需要node环境

<img src="1.bmp">

# 什么是webpack

- webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)


# 安装

四个核心概念：

- 入口(entry)
- 输出(output)
- 加载器(loader)
- 插件(plugins)

```js
cnpm install -g webpack
cnpm install -g webpack-cli
```


# 入口

创建一份`webpack.config.js`，webpack的配置文件

相当于当时写gulp的gulpfile.js，作用相似

```js
module.exports = {
  // 入口
  entry: './src/index.js'
};
```

把`'./src/index.js'`文件导入到webpack进行处理

# 出口

这里运用了一个[path](http://nodejs.cn/api/path.html)，它是node内置模块，[__dirname](http://nodejs.cn/api/globals.html#globals_dirname)是
```js
const path = require('path');
module.exports = {
    // 入口
    entry: './src/index.js',
    output: {
        // 导出的文件夹路径
        path: path.resolve(__dirname, 'dist'),
        // 导出的文件的名字
        filename: 'bundle.js'
    }
};
```

# 执行

要在`webpack.config.js`的所在目录下，打开终端执行`webpack`命令

# 原理

用在简答代码的情况，利用eval的方法把代码变成字符串放入执行
```js
eval("字符串code")
```

# 模块化

利用`<script>`在html页面引入多份JS模块
```js
<script src="jquery.js"></script>
<script src="bundle.js"></script>
```

现在只需要在`index.js`引入对应的模块，而这些模块需要再`npm`获取
```js
const $ = require('jquery')
require('./bootstrap.css')
require('./bootstrap.png')
```

# 加载器

转化文件，相当gulp的task

webpack只能识别JS文件，任何非JS文件均需要loader来去转化为JS
```js
scss->css->js
typescript->javascript->js
es6->es5->js
pug->html->js
js->jsx->js
png->js
```

