import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import * as actions from '@actions/counter'
import { ButtonItem } from '@components'
import logo from './assets/logo.png'
import './user-login.scss'

const BUTTON = {
  marginTop: Taro.pxTransform(30)
}

@connect(state => state.counter, actions)
class UserLogin extends Component {
  config = {
    navigationBarTitleText: '登录'
  }

  render () {
    return (
      <View className='user-login'>
        <Image src={logo} className='user-login__logo' />
        <ButtonItem
          type='primary'
          text='微信登录'
        />
        <ButtonItem
          plain
          text='邮箱账号登录'
          style={BUTTON}
        />
        <ButtonItem
          plain
          text='手机号登录'
          style={BUTTON}
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
