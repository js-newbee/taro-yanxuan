# taro-yanxuan

![overview](./screenshot/overview.png)

首个 Taro 多端统一实例 - 网易严选（小程序 + H5 + React Native）。

本项目基于**趣店 FED** 在 Taro 多端统一开发方面的实践经验，以网易严选小程序为载体，旨在探讨如何以正确的方式使用 Taro 进行多端开发，具体可查看文章 [Taro 多端开发的正确姿势：打造三端统一的网易严选（小程序、H5、React Native）]()。

## 效果预览

本项目直接调用的网易严选微信小程序接口，若要体验登录、购物车功能，请使用网易邮箱账号登录。

| 微信小程序 | H5 - [访问链接](http://jsnewbee.com/taro-yanxuan/) | React Native |
| :--------: | :--------:| :--------: |
| 请 clone 代码本地运行 | ![H5](./screenshot/h5-qr-code.png) | [Expo Snacks](https://snack.expo.io/@caiminxing/taro-yanxuan) |

如下是 **React Native** 的运行截图：

| 首页、分类 | 二级分类、详情 | 购物车、个人 |
| :--------: | :--------:| :--------: |
| ![首页、分类](./screenshot/video-01.gif) | ![二级分类、详情](./screenshot/video-02.gif) | ![购物车、个人](./screenshot/video-03.gif) |

## 本地运行

本项目直接调用的网易严选微信小程序接口，若要体验登录、购物车功能，请使用网易邮箱账号登录。

``` bash
# 全局安装 @tarojs/cli 指定版本，或 npm install -g @tarojs/cli@1.2.13
yarn global add @tarojs/cli@1.2.13

# 安装依赖，或 npm i
yarn

# 运行微信小程序
npm run dev:weapp

# 运行 H5
npm run dev:h5

# 运行 React Native
# 注意当前未适配各屏幕大小，需用 375px 屏幕大小运行才能取得最佳效果
# 若用 iOS 模拟器打开的不是 iPhone 6/7/8，可点击顶部菜单 Hardware -> iOS xx 切换设备
npm run dev:rn
```

## 其他说明

本项目代码没有做过多封装，方便阅读，也实现了足够多的样式细节进行踩坑，具体涉及的踩坑点、注意事项都在代码中以注释 `// TODO`（Taro 还未支持的）、`// NOTE`（开发技巧、注意事项）注明了。
