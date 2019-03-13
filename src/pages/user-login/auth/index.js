import Taro, { Component } from '@tarojs/taro'
import { ButtonItem } from '@components'

// XXX 仅仅作为多端组件示例，实际只实现了邮箱登录
export default class AUth extends Component {
  handleClick = () => {
    Taro.showToast({
      title: '目前只实现了邮箱登录~',
      icon: 'none'
    })
  }

  render () {
    return (
      <ButtonItem
        type='primary'
        text='登录'
        onClick={this.handleClick}
      />
    )
  }
}
