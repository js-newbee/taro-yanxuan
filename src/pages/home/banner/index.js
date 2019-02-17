import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.scss'

export default class SwiperBanner extends Component {
  static defaultProps = {
    list: []
  }

  render () {
    const { list } = this.props
    return (
      <View className='home-banner'>
        <Swiper
          className='home-banner__swiper'
          circular
          autoplay
          indicatorDots
          indicatorActiveColor='rgb(178, 42, 49)'
          // TODO 目前 H5、RN 暂不支持 previousMargin、nextMargin
          // previousMargin
          // nextMargin
        >
          {list.map(item => (
            <SwiperItem
              key={item.rank}
              className='home-banner__swiper-item'
            >
              <Image
                className='home-banner__swiper-item-img'
                src={item.img}
              />
            </SwiperItem>
          ))}
        </Swiper>
      </View>
    )
  }
}
