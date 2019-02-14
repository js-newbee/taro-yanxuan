import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import { HomeTitle } from '@components'
import './index.scss'

export default class Pin extends Component {
  static defaultProps = {
    list: []
  }

  getList = () => {
    // 每3个分成一组
    const { list } = this.props
    return []
  }

  render () {
    const list = this.getList()
    return null

    return (
      <View className='home-pin'>
        <HomeTitle
          title='免邮拼团'
        />
        <Swiper
          className='home-pin__wrap'
          circular
          autoplay
          indicatorDots
          indicatorActiveColor='rgb(178, 42, 49)'
        >
          {list.map(item => (
            <SwiperItem
              key={item.index}
              className='home-pin__item'
            >
              <Image
                className='home-pin__item-img'
                src={item.img}
              />
            </SwiperItem>
          ))}
        </Swiper>
      </View>
    )
  }
}
