import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'

export default class Banner extends Component {
  static defaultProps = {
    banner: {}
  }

  handleClick = (id) => {
    this.props.onClick(id)
  }

  render () {
    const { banner } = this.props
    return banner.img ? (
      <View className='cate-banner'>
        <Image
          className='cate-banner__img'
          src={banner.img}
          mode='widthFix'
        />
      </View>
    ) : null
  }
}
