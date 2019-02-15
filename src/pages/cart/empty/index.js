import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import empty from './assets/empty.png'
import './index.scss'

export default class Empty extends Component {
  render () {
    return (
      <View className='cart-empty'>
        <Image
          className='cart-empty__img'
          src={empty}
        />
        <Text className='cart-empty__txt'>
          {this.props.text || '去添加点什么吧'}
        </Text>
      </View>
    )
  }
}
