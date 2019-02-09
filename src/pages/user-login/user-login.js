import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import * as actions from '@actions/user'
import { ButtonItem } from '@components'
import logo from './assets/logo.png'
import './user-login.scss'

/* TODO 由于 RN 的 app.js 中 initPxTransform 执行顺序关系，不能在这里用到 Taro.pxTransform */
// const BUTTON = {
//   marginTop: Taro.pxTransform(30)
// }

@connect(state => state.user, actions)
class UserLogin extends Component {
  config = {
    navigationBarTitleText: '登录'
  }

  handleLogin = (type) => {
    /* TODO 时间关系尚未实现具体登录 */
    const typeName = {
      wechat: '微信',
      email: '邮箱',
      telephone: '手机号'
    }
    this.props.dispatchLogin().then(() => {
      Taro.showToast({
        title: `使用${typeName[type]}登录`,
        icon: 'none'
      })
      Taro.navigateBack()
    })
  }

  render () {
    const BUTTON = {
      marginTop: Taro.pxTransform(30)
    }

    return (
      <View className='user-login'>
        <View className='user-login__logo'>
          <Image src={logo} className='user-login__logo-img' />
        </View>
        <ButtonItem
          type='primary'
          text='微信登录'
          onClick={this.handleLogin.bind(this, 'wechat')}
        />
        <ButtonItem
          plain
          text='邮箱账号登录'
          compStyle={BUTTON}
          onClick={this.handleLogin.bind(this, 'email')}
        />
        <ButtonItem
          plain
          text='手机号登录'
          compStyle={BUTTON}
          onClick={this.handleLogin.bind(this, 'telephone')}
        />
        <View className='user-login__reg'>
          <Text className='user-login__reg-txt'>
            {'手机号快捷注册>'}
          </Text>
        </View>
      </View>
    )
  }
}

export default UserLogin
