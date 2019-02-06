import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import * as actions from '@actions/counter'
import Profile from './profile'
import Menu from './menu'
import './user.scss'

@connect(state => state.counter, actions)
class Index extends Component {
  config = {
    navigationBarTitleText: '个人中心'
  }

  render () {
    return (
      <View className='user'>
        <Profile />
        <Menu />
        <View className='user__logout'>
          <Text className='user__logout-txt'>退出登录</Text>
        </View>
      </View>
    )
  }
}

export default Index
