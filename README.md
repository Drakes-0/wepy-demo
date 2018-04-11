# `wepy`框架开发Demo

**原包体积：**
**306KB**

## 去除`wepy-async-function`包的引用

> 小程序环境已原生支持`Promise`，`regenerator-runtime`并不常用，包会导致在微信开发者工具调试环境下报错，因为在严格模式下`this`关键字被禁止指向全局对象。

## `lodash`资源包重复拷贝的问题

依赖关系：`redux-promise` require `flux-standard-action` require `lodash.xxx`
将`redux-promise`替换为更常用的`redux-thunk`

## 去除默认引入的`wepy-com-toast`组件

## 去除默认引入的`redux-actions`

## 运行环境导致的异常

引用`wepy-plugin-replace`处理`npm`包或源码中运行环境相关的代码

**处理后的包体积：**
**171KB**

## `wepy`的坑

`wpy`组件文件需要以空行结束