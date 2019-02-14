import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'

export default class Banner extends Component {
  static defaultProps = {
    banner: []
  }

  handleClick = (item) => {
    // TODO 跳转链接 item.targetUrl
    Taro.showToast({
      title: '敬请期待',
      icon: 'none'
    })
  }

  render () {
    const { banner } = this.props
    return (
      <View className='cate-banner'>
        {banner.slice(0, 1).map(item => (
          <View
            key={item.id}
            className='cate-banner__item'
            onClick={this.handleClick.bind(this, item)}
          >
            <Image
              className='cate-banner__item-img'
              src={item.picUrl}
              mode='widthFix'
            />
          </View>
        ))}
      </View>
    )
  }
}
