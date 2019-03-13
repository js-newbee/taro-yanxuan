import Taro, { Component } from '@tarojs/taro'
import { ButtonItem } from '@components'
import TaroAlipay from '@utils/taro.alipay'

// XXX 仅仅作为多端组件示例，实际只实现了邮箱登录
export default class AUth extends Component {
  agreeAuth = () => {
    // XXX 支付宝小程序需要关联应用才能授权成功
    TaroAlipay
      .getAuthCode({ scopes: 'auth_user' })
      .then(TaroAlipay.getAuthUserInfo)
      .then((userInfo) => {
        Taro.showToast({
          title: `支付宝昵称: ${userInfo.nickName}，请使用邮箱登录`,
          icon: 'none'
        })
      })
      .catch(() => {
        Taro.showToast({
          title: '授权失败',
          icon: 'none'
        })
      })
  }

  render () {
    return (
      <ButtonItem
        type='primary'
        text='支付宝登录'
        onClick={this.agreeAuth}
      />
    )
  }
}
