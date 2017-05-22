## 什么是weex
weex 是阿里出品的一个类似RN的框架，可以使用前端技术来开发移动应用，
实现一份代码支持H5，IOS和Android。 最新版本的weex已默认将vue.js作为
前端框架，而weex-hacknews则是weex官方出品的，首个使用 Weex 和 Vue
 开发的 Hacker News 原生应用，在项目中使用了 Vuex 和 vue-router等官
 方组件 。因此这个应用可以作为weex-vue开发的典范，分析该项目代码可以了解如何使用
 weex、vue技术栈进行开发，实现同一份代码在 iOS、Android、Web 下都能完整地工作。

## weex基本工作原理
![process](./weex-process.png)
    
    工作流
    we\vue 文件 ————–前端(we\vue源码) 
    ↓ (转换) ——————前端(构建过程) 
    JS Bundle —————–前端(JS Bundle代码) 
    ↓ (部署) ——————服务器 
    在服务器上的JS bundle —-服务器 
    ↓ (编译) —————— 客户端(JS引擎) 
    虚拟 DOM 树 ————— 客户端(Weex JS Framework) 
    ↓ (渲染) —————— 客户端(渲染引擎) 
    Native视图 ————— 客户端(渲染引擎) 

	Weex是跨平台，可扩展的动态化技术. 你能通过在Weex源码中写<template>, <style> 和 <script>标签，然后把这些标签转换为JS Bundle用于部署, 在服务端以这些JS Bundle响应请求. 当客户端接收到JS Bundle时，它能用被客户端中的JS引擎用于管理Native渲染;API调用和用户交互.

### jsbridge js桥接器
	
	ios：
#### weex 渲染流程
	
	
    
## 如何使用weex
[weex-toolkit](https://weex.apache.org/cn/guide/tools/toolkit.html)是官方提供的一个脚手架命令行工具，
你可以使用它进行 Weex 项目的创建，调试以及打包等功能。

[weex-pack](https://github.com/weexteam/weex-pack)是新一代的weex应用工程和插件工程开发套件,目前weex-toolkit集成对weexpack的命令调用支持，你可以使用weex-toolkit命令来实现weexpack具备的功能。
 


## weex上手
[weex中组件和模块 跟web标准的差别](https://weex.apache.org/cn/references/web-standards.html)

[weex中使用vue全家桶的差异性](https://weex.apache.org/cn/references/vue/difference-of-vuex.html)
    
## weex demo展示



[代码地址](https://github.com/yinshuxun/weex-start-kit)
