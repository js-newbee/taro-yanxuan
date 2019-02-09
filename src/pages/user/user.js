import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import * as actions from '@actions/user'
import Profile from './profile'
import Menu from './menu'
import './user.scss'

@connect(state => state.user, actions)
class Index extends Component {
  config = {
    navigationBarTitleText: '个人中心'
  }

  handleLogin = () => {
    Taro.navigateTo({
      url: '/pages/user-login/user-login'
    })
  }

  render () {
    const { userInfo } = this.props
    const isLogin = !!userInfo.id

    return (
      <View className='user'>
        <Profile userInfo={userInfo} />
        <Menu />
        {isLogin &&
          <View className='user__logout' onClick={this.handleLogin}>
            <Text className='user__logout-txt'>切换账号</Text>
          </View>
        }
      </View>
    )
  }
}

export default Index
