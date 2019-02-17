import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'

export default class Banner extends Component {
  static defaultProps = {
    banner: []
  }

  handleClick = () => {
    // XXX banner 的链接跳转暂且先不做了，有需要可以看 “我的” -> “帮助中心”
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
