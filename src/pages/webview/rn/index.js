/**
 * React Native 原生组件
 */
import Taro, { Component } from '@tarojs/taro'
import { WebView } from 'react-native'

export default class WebViewRN extends Component {
  render() {
    return (
      <WebView
        style={{ height: '100%' }}
        originWhitelist={['*']}
        source={{ uri: this.props.src }}
      />
    )
  }
}
