import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import Vip from './vip'
import bg from './assets/bg.png'
import defaultAvatar from './assets/default-avatar.png'
import qrCode from './assets/qr-code.png'
import './index.scss'

export default class Profile extends Component {
  static defaultProps = {
    userInfo: {}
  }

  handleLogin = () => {
    const { userInfo } = this.props
    if (!userInfo.id) {
      Taro.navigateTo({
        url: '/pages/user-login/user-login'
      })
    }
  }

  render () {
    const { userInfo } = this.props
    const isLogin = !!userInfo.id

    return (
      <View className='user-profile'>
        {/* 背景图片：Image 标签 + position absolute 实现 */}
        <Image
          className='user-profile__bg'
          src={bg}
          mode='widthFix'
        />

        <View className='user-profile__wrap'>
          <View className='user-profile__avatar'>
            <Image
              className='user-profile__avatar-img'
              src={userInfo.avatar || defaultAvatar}
              onClick={this.handleLogin}
            />
          </View>

          <View className='user-profile__info' onClick={this.handleLogin}>
            <Text className='user-profile__info-name'>{isLogin ? userInfo.name : '未登录'}</Text>
            <Text className='user-profile__info-type'>{isLogin ? userInfo.type : '点击登录账号'}</Text>
          </View>

          <View className='user-profile__extra'>
            <View className='user-profile__extra-qr'>
              <Image
                className='user-profile__extra-qr-img'
                src={qrCode}
              />
            </View>
          </View>

          <Vip />
        </View>
      </View>
    )
  }
}
