import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

export default class Tip extends Component {
  static defaultProps = {
    list: []
  }

  render () {
    const { list } = this.props
    return (
      <View className='home-operation'>
        {list.map((item, index) => (
          <Image
            key={index}
            className='home-operation__item'
            src={item.picUrls}
          />
        ))}
      </View>
    )
  }
}
