import Taro, { Component } from '@tarojs/taro'
import { ButtonItem } from '@components'

// XXX 仅仅作为多端组件示例，实际只实现了邮箱登录
export default class AUth extends Component {
  agreeAuth = () => {
    Taro.getUserInfo().then((res) => {
      const { errMsg, userInfo } = res
      if (errMsg === 'getUserInfo:ok') {
        Taro.showToast({
          title: `微信昵称: ${userInfo.nickName}，请使用邮箱登录`,
          icon: 'none'
        })
      } else {
        Taro.showToast({
          title: '授权失败',
          icon: 'none'
        })
      }
    })
  }

  render () {
    return (
      <ButtonItem
        type='primary'
        text='微信登录'
        openType='getUserInfo'
        onGetUserInfo={this.agreeAuth}
      />
    )
  }
}
