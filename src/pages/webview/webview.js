import Taro, { Component } from '@tarojs/taro'
import { View, WebView } from '@tarojs/components'
/**
 * // NOTE Taro 的 RN 端还未提供 WebView 组件，可以引入原生组件来解决
 * （备注：Taro v1.2.16 已支持，这块代码还是保留作为演示）
 *
 * Taro 有开启了 tree shaking，对于未用到的内容编译时会自动去除
 * 因此可以把相应端的内容都 import 进来，再根据环境进行调用即可
 *
 * 另外 1.2.17 版本有提供了统一接口方式 https://nervjs.github.io/taro/docs/envs.html
 * 可以参考 ./src/pages/user-login 中的实现
 */
import WebViewRN from './rn'
import './webview.scss'

export default class extends Component {
  config = {
    navigationBarTitleText: ''
  }

  url = ''
  title = ''

  componentWillMount() {
    this.url = decodeURIComponent(this.$router.params.url || '')
    this.title = decodeURIComponent(this.$router.params.title || '')
    Taro.setNavigationBarTitle({ title: this.title })
  }

  render () {
    return (
      <View className='webview'>
        {/* // NOTE 编译时只会保留相应端的内容，因此非 RN 端时不会编译 WebViewRN */}
        {process.env.TARO_ENV === 'rn' ?
          <WebViewRN src={this.url} /> :
          <WebView src={this.url} />
        }
      </View>
    )
  }
}
