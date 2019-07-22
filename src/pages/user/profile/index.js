import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import defaultAvatar from '@assets/default-avatar.png'
import Vip from './vip'
import bg from './assets/bg.png'
import qrCode from './assets/qr-code.png'
import level01 from './assets/level-01.png'
import './index.scss'

export default class Profile extends Component {
  static defaultProps = {
    userInfo: {}
  }

  handleLogin = () => {
    if (!this.props.userInfo.login) {
      Taro.navigateTo({
        url: '/pages/user-login/user-login'
      })
    }
  }

  getUid = (uid) => {
    if (!uid || !/@/.test(uid)) {
      return ''
    }
    const [username, suffix] = uid.split('@')
    const firstLetter = username[0]
    const lastLetter = username[username.length - 1]
    return `${firstLetter}****${lastLetter}@${suffix}`
  }

  render () {
    const { userInfo } = this.props

    return (
      <View className='user-profile'>
        {/* // NOTE 背景图片：Image 标签 + position absolute 实现 */}
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
            <Text className='user-profile__info-name'>
              {userInfo.login ? userInfo.nickname : '未登录'}
            </Text>
            {userInfo.login ?
              <View className='user-profile__info-wrap'>
                {/* XXX 没有全部 level 对应的图标，暂时都用 v1 */}
                <Image className='user-profile__info-level' src={level01} />
                <Text className='user-profile__info-uid'>
                  {this.getUid(userInfo.uid)}
                </Text>
              </View> :
              <Text className='user-profile__info-tip'>点击登录账号</Text>
            }
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
