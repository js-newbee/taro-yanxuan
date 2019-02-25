import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { HomeTitle, Tag } from '@components'
import imgBg from './assets/img-bg.png'
import './index.scss'

export default class Popular extends Component {
  static defaultProps = {
    data: {}
  }

  render () {
    const { data: { title, itemList = [] } } = this.props

    return (
      <View className='home-popular'>
        <HomeTitle
          title={title}
          link='#'
        />
        <View className='home-popular__show'>
          {itemList.slice(0, 1).map(item => (
            <View key={item.id} className='home-popular__show-item'>
              <Image className='home-popular__show-item-bg' src={imgBg} />
              <Image className='home-popular__show-item-img' src={item.listPicUrl} />
              <View className='home-popular__show-item-info'>
                {!!item.limitedTag &&
                  <Tag text={item.limitedTag} />
                }
                <Text className='home-popular__show-item-name' numberOfLines={1}>
                  {item.name}
                </Text>
                <Text className='home-popular__show-item-desc' numberOfLines={1}>
                  {item.simpleDesc}
                </Text>
                <Text className='home-popular__show-item-price'>
                  {` ¥${item.activityPrice || item.retailPrice}`}
                </Text>
              </View>
            </View>
          ))}
        </View>
        <View className='home-popular__list'>
          {itemList.slice(1, 4).map(item => (
            <View key={item.id} className='home-popular__list-item'>
              <Image
                className='home-popular__list-item-img'
                src={item.listPicUrl}
              />
              {!!item.limitedTag &&
                <Tag text={item.limitedTag} />
              }
              <View className='home-popular__list-item-wrap'>
                <Text className='home-popular__list-item-name'>
                  {item.name}
                  <Text className='home-popular__list-item-price'>
                    {` ¥${item.activityPrice || item.retailPrice}`}
                  </Text>
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    )
  }
}
