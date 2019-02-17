import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.scss'

export default class Gallery extends Component {
  static defaultProps = {
    list: []
  }

  state = {
    current: 0
  }

  handleChange = (e) => {
    const { current } = e.detail
    this.setState({ current })
  }

  render () {
    const { list } = this.props
    const { current } = this.state
    return (
      <View className='item-gallery'>
        <Swiper
          className='item-gallery__swiper'
          current={current}
          onChange={this.handleChange}
        >
          {list.map((item, index) => (
            <SwiperItem
              key={index}
              className='item-gallery__swiper-item'
            >
              <Image
                className='item-gallery__swiper-item-img'
                src={item}
              />
            </SwiperItem>
          ))}
        </Swiper>
        <View className='item-gallery__indicator'>
          <Text className='item-gallery__indicator-txt'>
            {`${current + 1}/${list.length}`}
          </Text>
        </View>
      </View>
    )
  }
}
