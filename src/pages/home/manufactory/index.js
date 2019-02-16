import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { HomeTitle } from '@components'
import './index.scss'

export default class Manufactory extends Component {
  static defaultProps = {
    data: {},
    boss: []
  }

  render () {
    const { data, boss } = this.props
    const { title, manufactoryList = [] } = data

    return (
      <View className='home-manufactory'>
        <HomeTitle
          title={title}
          link='#'
        />
        <View className='home-manufactory__list'>
          {manufactoryList.map(item => (
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
                src={item.picUrls[0]}
              />
            </View>
          ))}
        </View>
      </View>
    )
  }
}
