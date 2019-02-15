import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import tipIcon from './assets/tip-icon.png'
import './index.scss'

export default class Tip extends Component {
  static defaultProps = {
    list: []
  }

  render () {
    const { list } = this.props
    return (
      <View className='cart-tip'>
        {list.map((tip, index) => (
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
