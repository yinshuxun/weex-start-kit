# weex-vue-starter-kit 

[weex入门文档，个人总结](https://github.com/yinshuxun/weex-start-kit/blob/master/sharing/share.md)

> 吐槽：复制粘贴了一波 weex-toolkit 的配置

## 运行demo

```bash
yarn # 也可以使用npm install

#run web
npm run dev
npm run ss(demo中search模块用到的后台服务)
open http://0.0.0.0:8080/

# run android
weexpack platform add android
weexpack run android

# run ios
weexpack platform add ios
weexpack run ios
```



## 手机调试

```
open http://0.0.0.0:8080/qrcode.html （使用weex-playground扫描图中二位码，即可预览demo）
```

## 使用说明

可以使用所有的 `weex-pack` 和 `weex` 相关命令，可见：

- [weex-pack](https://github.com/weexteam/weex-pack)
- [weex-toolkit](https://github.com/weexteam/weex-toolkit)

## 目录结构

```
├── yarn.lock
├── README.md
├── android.config.json
├── config.xml
├── hooks
│   └── README.md
├── ios.config.json
├── package.json
├── platforms     // 平台模版目录
├── plugins       // 插件下载目录
│   └── README.md
├── src           // 业务代码（vue文件）目录
│   └── index.vue
├── index.tpl
├── qrcode.tpl
└── webpack.config.js
```
