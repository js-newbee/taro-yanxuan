import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { CheckboxItem, ButtonItem } from '@components'
import './index.scss'

export default class Footer extends Component {
  static defaultProps = {
    cartInfo: {},
    onToggle: () => {}
  }

  handleUpdateCheck = () => {
    const { cartInfo } = this.props
    const { cartGroupList = [], countCornerMark, selectedCount } = cartInfo
    const cartList = cartGroupList.slice(1)
    const payload = { skuList: [] }
    const isAllChecked = !!selectedCount && parseInt(countCornerMark) === selectedCount
    const nextChecked = !isAllChecked
    cartList.forEach((group) => {
      group.cartItemList.forEach((item) => {
        payload.skuList.push({
          skuId: item.skuId,
          type: item.type,
          extId: item.extId,
          cnt: item.cnt,
          checked: nextChecked,
          canCheck: true,
          promId: group.promId,
          promType: group.promType
        })
      })
    })
    this.props.onUpdateCheck(payload)
  }

  handleOrder = () => {
    Taro.showToast({
      title: '敬请期待',
      icon: 'none'
    })
  }

  render () {
    const { cartInfo } = this.props
    return (
      <View className='cart-footer'>
        <View className='cart-footer__select'>
          <CheckboxItem
            checked={!!cartInfo.selectedCount}
            onClick={this.handleUpdateCheck}
          >
            <Text className='cart-footer__select-txt'>
              {!cartInfo.selectedCount ? '全选' : `已选(${cartInfo.selectedCount})`}
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
