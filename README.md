# taro-yanxuan

![overview](https://qit-team.github.io/public/images/taro-yanxuan/overview.png)

首个 [Taro](https://github.com/NervJS/taro) 多端统一实例 - 网易严选（小程序 + H5 + React Native）。

本项目基于**趣店 FED** 在 Taro 多端统一开发方面的实践经验，以网易严选小程序为载体，旨在探讨如何以正确的方式使用 Taro 进行多端开发，具体可查看文章 [Taro 多端开发的正确姿势：打造三端统一的网易严选（小程序、H5、React Native）](https://juejin.im/post/5c6a151f518825625e4ac830)。

## 效果预览

小程序端已支持微信小程序、支付宝小程序，但无法提供在线版，请 clone 代码本地运行。

本项目直接调用的网易严选接口，若要体验登录、购物车功能，请使用网易邮箱账号登录。

| 小程序 | H5 - [访问链接](http://jsnewbee.com/taro-yanxuan/) | React Native |
| :--------: | :--------:| :--------: |
| 请 clone 代码本地运行 | ![H5](https://qit-team.github.io/public/images/taro-yanxuan/h5-qr-code.png) | [Expo Snacks](https://snack.expo.io/@caiminxing/taro-yanxuan) |

如下是 **React Native** 的运行截图：

| 首页、分类 | 详情、加购物车 | 购物车、个人 |
| :--------: | :--------:| :--------: |
| ![首页、分类](https://qit-team.github.io/public/images/taro-yanxuan/video-01.gif) | ![二级分类、详情](https://qit-team.github.io/public/images/taro-yanxuan/video-02.gif) | ![购物车、个人](https://qit-team.github.io/public/images/taro-yanxuan/video-03.gif) |

## 本地运行

本项目直接调用的网易严选接口，若要体验登录、购物车功能，请使用网易邮箱账号登录。

``` bash
# 安装依赖，或 npm i
yarn

# 运行小程序，编译后的文件位于项目下的 dist 文件夹
# （微信 dev:weapp，支付宝 dev:alipay）
npm run dev:weapp

# 运行 H5
npm run dev:h5

# 运行 React Native，有如下注意事项：
# 1. 基于 Expo，运行说明：https://nervjs.github.io/taro/docs/react-native.html
# 2. 当前只适配了 375px 屏幕，若用 iOS 模拟器打开的不是 iPhone 6/7/8，可点击顶部菜单 Hardware -> iOS xx 切换设备
npm run dev:rn
```

## 项目说明

本项目的主要目的是阐述多端开发思路、技巧，力求直观、方便阅读，因此是在 `taro init` 的基础上开发的，没有去做太多封装。诸如是用 Redux 还是 Mobx，网络请求怎么封装比较完美并不是本项目的重点。

本项目不会去实现一个完整的网易严选，但也实现了足够多的功能、细节进行踩坑，具体涉及的踩坑点、注意事项都在代码中以注释 `// TODO`（Taro 还未支持的）、`// NOTE`（开发技巧、注意事项）注明了。

另外 Taro 的版本更新速度还是很给力的，本项目最早基于 v1.2.11 开发，2 月 19 号发布时用的是 v1.2.13，到 3 月 11 号时已更新到 v1.2.17 版本，我们也会尽量跟进版本变动，对代码做出相应完善。

## License

MIT
