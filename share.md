## 什么是weex
Weex 是一套简单易用的跨平台开发方案，能以 web 的开发体验构建高性能、可扩展的 native 应用，为了做到这些，Weex 与 Vue 合作，使用 Vue 作为上层框架，并遵循 W3C 标准实现了统一的 JSEngine 和 DOM API，这样一来，你甚至可以使用其他框架驱动 Weex，打造三端一致的 native 应用。 

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

	和如今 web 开发的最佳实践一样，Weex 会把一个页面的源代码全部编译打包成一个 JS bundle，在浏览器中，我们需要把这个 JS bundle 作为一段 <script> 载入网页，在客户端里，我们把这段 JS bundle 载入本地，并通过 WeexSDK 直接执行。
	
android native中。Weex中的JSBridge，还是比较复杂的，因为它们都将html页面映射成了原生组件，不在基于webview提供的那几个API。它们是通过JNI，让C++作为一个中间层，实现Java与JS的绑定。这里有几篇详细的文章[weex的jsbridge实现原理](https://zhuanlan.zhihu.com/p/25326775)
## weex与web平台的差异
* Weex 是一个跨平台解决方案，Web 平台只是其一种运行环境，除此之外还可以在 Android 和 iOS 客户端中运行。原生开发平台和 Web 平台之间的差异，在功能和开发体验上都有一些差异
* Weex环境中没有DOM。DOM（Document Object Model），即文档对象模型，是 HTML 和 XML 文档的编程接口，是 Web 中的概念。Weex 的运行环境以原生应用为主，在 Android 和 iOS 环境中渲染出来的是原生的组件，不是 DOM Element。(演示text demo)
* Weex 环境中没有 BOM，因此无法直接使用诸如window、screen、document、history、location、navigator等，但是提供了诸如
WXEnvironment对象，可以获取到当前设备的屏幕或者环境信息。(演示demo)
* 在 Weex 中能够调用移动设备原生 API，使用方法是通过注册、调用模块来实现。其中有一些模块是 Weex 内置的，如 clipboard 、 navigator 、storage 等。（演示demo）

    
## 如何使用weex
[weex-toolkit](https://weex.apache.org/cn/guide/tools/toolkit.html)是官方提供的一个脚手架命令行工具，
你可以使用它进行 Weex 项目的创建，调试以及打包等功能。

[weex-pack](https://github.com/weexteam/weex-pack)是新一代的weex应用工程和插件工程开发套件,目前weex-toolkit集成对weexpack的命令调用支持，你可以使用weex-toolkit命令来实现weexpack具备的功能。
 


## weex上手
[weex中组件和模块 跟web标准的差别](https://weex.apache.org/cn/references/web-standards.html)

[weex中使用vue全家桶的差异性](https://weex.apache.org/cn/references/vue/difference-of-vuex.html)
    
## weex demo展示

[demo演示地址](https://github.com/yinshuxun/weex-start-kit)
