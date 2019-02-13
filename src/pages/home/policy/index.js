import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

export default class Policy extends Component {
  static defaultProps = {
    list: []
  }

  render () {
    const { list } = this.props
    return (
      <View className='home-policy'>
        {list.map((item, index) => (
          <View key={index} className='home-policy__item'>
            <Image
              className='home-policy__item-img'
              src={item.icon}
            />
            <Text className='home-policy__item-txt'>{item.desc}</Text>
          </View>
        ))}
      </View>
    )
  }
}
