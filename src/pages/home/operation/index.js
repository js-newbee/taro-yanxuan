import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './index.scss'

export default class Tip extends Component {
  static defaultProps = {
    list: [],
    sale: {}
  }

  render () {
    const { list, sale } = this.props
    const { bargainCommodity = {}, couponCenter = {} } = sale

    let couponPic = ''
    try {
      couponPic = JSON.parse(couponCenter.pic)[0]
    } catch(e) {}

    return (
      <View className='home-operation'>
        <View className='home-operation__list'>
          {list.map((item, index) => (
            <Image
              key={index}
              className='home-operation__list-item'
              src={item.picUrls[0]}
            />
          ))}
        </View>

        <View className='home-operation__wrap'>
          <View className='home-operation__coupon'>
            <View className='home-operation__coupon-title'>
              <Text className='home-operation__coupon-title-txt'>先领券更优惠</Text>
            </View>
            <View className='home-operation__coupon-wrap'>
              <Image className='home-operation__coupon-img' src={couponPic} />
              <View className='home-operation__coupon-info'>
                <Text className='home-operation__coupon-name'>
                  {couponCenter.couponName}
                </Text>
                <Text className='home-operation__coupon-link'>
                  {`马上去领取 >`}
                </Text>
              </View>
            </View>
          </View>

          <View className='home-operation__bargain'>
            <Text className='home-operation__bargain-txt'>
              {bargainCommodity.title}
            </Text>
            <Image
              className='home-operation__bargain-img'
              src={bargainCommodity.picUrls && bargainCommodity.picUrls[0]}
            />
            <View className='home-operation__bargain-info'>
              <Text className='home-operation__bargain-price'>
                ¥{bargainCommodity.payload && bargainCommodity.payload.price}
              </Text>
              <Text className='home-operation__bargain-origin'>
                ¥{bargainCommodity.payload && bargainCommodity.payload.originPrice}
              </Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
