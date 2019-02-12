import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

const SATISFY_AMOUNT = 499

export default class Gift extends Component {
  static defaultProps = {
    amount: 0
  }

  handleClick = () => {
    Taro.showToast({
      title: '敬请期待',
      icon: 'none'
    })
  }

  render () {
    const { amount } = this.props
    let text = `再购${SATISFY_AMOUNT}元立享满${SATISFY_AMOUNT}元领取赠品`
    if (amount) {
      text = amount > SATISFY_AMOUNT ?
        `已满足满${SATISFY_AMOUNT}元领取赠品` :
        `再购${parseFloat(SATISFY_AMOUNT - amount).toFixed(2)}元立享满${SATISFY_AMOUNT}元领取赠品`
    }
    return (
      <View className='cart-gift'>
        <Text className='cart-gift__tag'>全场满赠</Text>
        <Text className='cart-gift__txt'>
          {text}
        </Text>
        <Text className='cart-gift__arrow'>{'>'}</Text>
        <View className='cart-gift__line' />
        <Text className='cart-gift__link'>查看赠品</Text>
      </View>
    )
  }
}
