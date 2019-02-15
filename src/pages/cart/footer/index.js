import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { CheckboxItem, ButtonItem } from '@components'
import './index.scss'

export default class Footer extends Component {
  static defaultProps = {
    cartInfo: {},
    onToggle: () => {}
  }

  handleOrder = () => {
    Taro.showToast({
      title: '敬请期待',
      icon: 'none'
    })
  }

  render () {
    const { cartInfo, onToggle } = this.props
    return (
      <View className='cart-footer'>
        <View className='cart-footer__select'>
          <CheckboxItem
            checked={!!cartInfo.selectedCount}
            onClick={onToggle}
          >
            <Text className='cart-footer__select-txt'>
              {cartInfo.canAllChecked ? '全选' : `已选(${cartInfo.selectedCount})`}
            </Text>
          </CheckboxItem>
        </View>
        <View className='cart-footer__amount'>
          <Text className='cart-footer__amount-txt'>
            ¥{parseFloat(cartInfo.actualPrice).toFixed(2)}
          </Text>
        </View>
        <View className='cart-footer__btn'>
          <ButtonItem
            type='primary'
            text='下单'
            onClick={this.handleOrder}
          />
        </View>
      </View>
    )
  }
}
