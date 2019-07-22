# CHANGELOG

## 1.3.0 (2019-07-22)

* 升级 Taro 至 v1.3.4

## 1.2.1 (2019-03-27)

* 由于严选小程序首页界面、接口大幅变动，导致原先页面报错，暂时去掉不适配的部分

## 1.2.0 (2019-03-13)

* 升级 Taro 至 v1.2.17（@tarojs/components 有 bug，暂时用 v1.2.16）
* 引入统一接口的多端文件方式处理多端兼容问题 (./src/user-login/user-login)

## 1.1.0 (2019-03-05)

* 升级 Taro 至 v1.2.15
* 去掉 RN 绑定 onClick 时的样式兼容处理 [issue](https://github.com/NervJS/taro/issues/2205)
* 修改根据不同环境引入不同组件的写法 (./src/pages/webview)

## 1.0.0 (2019-02-20)

* 正式开源
