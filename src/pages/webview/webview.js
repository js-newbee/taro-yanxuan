import Taro, { Component } from '@tarojs/taro'
import { View, WebView } from '@tarojs/components'
import './webview.scss'

/**
 * // NOTE Taro 的 RN 端还未提供 WebView 组件，这种情况需要自己根据环境引入原生组件
 * 要注意引入写法，按如下方式才行，这样只会在相应环境引入，其他环境不会引入
 */
const WebViewRN = process.env.TARO_ENV === 'rn' ? require('./rn').default : null

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
        {process.env.TARO_ENV === 'rn' ?
          <WebViewRN src={this.url} /> :
          <WebView src={this.url} />
        }
      </View>
    )
  }
}
