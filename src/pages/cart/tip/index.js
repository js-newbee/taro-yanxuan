import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import tipIcon from './assets/tip-icon.png'
import './index.scss'

const TIP_TEXT = ['30天无忧退货', '48小时快速退款', '满88元免邮费']

export default class Tip extends Component {
  render () {
    return (
      <View className='cart-tip'>
        {TIP_TEXT.map((tip, index) => (
          <View key={index} className='cart-tip__item'>
            <Image
              className='cart-tip__item-img'
              src={tipIcon}
            />
            <Text className='cart-tip__item-txt'>{tip}</Text>
          </View>
        ))}
      </View>
    )
  }
}
