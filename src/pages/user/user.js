import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import * as actions from '@actions/user'
import { getWindowHeight } from '@utils/style'
import Profile from './profile'
import Menu from './menu'
import Activity from './activity'
import './user.scss'

@connect(state => state.user, actions)
class User extends Component {
  config = {
    navigationBarTitleText: '个人中心'
  }

  componentDidShow() {
    /* FIXEDME 跳转到 user-login 时会再次触发 didMount，需要看看是哪里的问题 */
    this.props.dispatchUser()
  }

  handleLogin = () => {
    Taro.navigateTo({
      url: '/pages/user-login/user-login'
    })
  }

  render () {
    const { userInfo } = this.props

    return (
      <View className='user'>
        <ScrollView
          scrollY
          className='user__wrap'
          style={{ height: getWindowHeight() }}
        >
          <Profile userInfo={userInfo} />
          <Menu />
          {userInfo.login &&
            <View className='user__logout' onClick={this.handleLogin}>
              <Text className='user__logout-txt'>切换账号</Text>
            </View>
          }
          <View className='user__empty' />
        </ScrollView>
        <View className='user__activity'>
          <Activity />
        </View>
      </View>
    )
  }
}

export default User
