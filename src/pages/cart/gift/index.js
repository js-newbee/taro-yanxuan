import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Gift extends Component {
  static defaultProps = {
    data: {}
  }

  handleClick = () => {
    Taro.showToast({
      title: '敬请期待',
      icon: 'none'
    })
  }

  render () {
    const { data } = this.props
    if (!data.promType) {
      return null
    }

    return (
      <View className='cart-gift'>
        <Text className='cart-gift__tag'>{data.promTitle}</Text>
        <Text className='cart-gift__txt'>
          {data.promTip}
        </Text>
        <Text className='cart-gift__arrow'>{'>'}</Text>
        <View className='cart-gift__line' />
        <Text className='cart-gift__link'>{data.jumpTitle}</Text>
      </View>
    )
  }
}
