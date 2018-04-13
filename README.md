# `wepy`框架开发Demo

**原包体积：**
**306KB**

## 整体概览：

* 组件：`wepy`组件
* 模板：`wxml`
* 样式：`postcss` + `postcss-plugin`
* 逻辑层：`npm` + `es2015` + `decorator`
* 网络请求：`wx.request` + `interceptor`
* 数据流：`redux` + `redux-thunk`
* 子系统：`component` + `sdk`
* 动画：待补充

#### 移除`wepy-async-function`包的引用

> 小程序环境已原生支持`Promise`，`regenerator-runtime`并不常用，包会导致在微信开发者工具调试环境下报错，因为在严格模式下`this`关键字被禁止指向全局对象。

#### 解决`lodash`资源包重复拷贝的问题

依赖关系：`redux-promise` require `flux-standard-action` require `lodash.xxx`

将`redux-promise`替换为更常用的`redux-thunk`

#### 移除默认引入的`redux-actions`

采纳`redux-actions`的`createActions`和`handleActions`写法

#### 运行环境导致的异常和常量定义

引用`wepy-plugin-replace`处理`npm`包或源码中运行环境相关的代码

#### 集成`postcss`编译环节，`less`暂时移除

添加`cssnext`并将运行环境设置为`ios 9`与`android 4.4`，据主流OS的发布和占比更改

#### 添加工作区IDE配置以完全适配`wepy`组件编译环节

目前仅支持`vscode`  

```bash
tabSize : 2
endWithNewline : true
html.validate.styles : false
javascript.implicitProjectConfig.experimentalDecorators : true
```

## 开发&调试

1.进入项目目录，使用`npm i`安装依赖

2.使用`npm run dev`开启实时编译

3.打开微信开发者工具，导入项目，项目地址为`${workspace}\\dist`，如果编译结果正常，直接展示编译后的项目首页

4.修改文件并保存，`wepy`实时编译生效，微信开发者工具自动同步编译并重新进入项目首页

5.本地调试：在微信开发者工具的控制台中调试  
  远程真机调试：点击工具栏中的远程调试，等待二维码生成，使用真机上的微信扫描二维码

**处理后的包体积：**
**175KB**

### `wepy`的坑

`wpy`组件文件需要以空行结束

空的`style`不生成`wxss`文件导致微信开发者工具报错