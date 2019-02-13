import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { HomeTitle } from '@components'
import './index.scss'

export default class Manufactory extends Component {
  static defaultProps = {
    list: [],
    boss: []
  }

  render () {
    const { list, boss } = this.props
    return (
      <View className='home-manufactory'>
        <HomeTitle
          title='品牌制造商直供'
        />
        <View className='home-manufactory__list'>
          {list.map(item => (
            <View key={item.tagId} className='home-manufactory__list-item'>
              <Image src={item.picUrl} className='home-manufactory__list-item-img' />
              <View className='home-manufactory__list-item-name'>
                <Text className='home-manufactory__list-item-name-txt'>
                  {`来自${item.name}`}
                </Text>
              </View>
              <View className='home-manufactory__list-item-wrap'>
                <Text className='home-manufactory__list-item-price'>{item.priceInfo}</Text>
                {item.newOnShelf &&
                  <Text className='home-manufactory__list-item-tag'>上新</Text>
                }
              </View>
            </View>
          ))}
        </View>
        <View className='home-manufactory__boss'>
          {boss.map((item, index) => (
            <View key={index} className='home-manufactory__boss-item'>
              <Image
                className='home-manufactory__boss-item-img'
                src={item.picUrls}
              />
            </View>
          ))}
        </View>
      </View>
    )
  }
}
