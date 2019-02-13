import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { HomeTitle, Tag } from '@components'
import './index.scss'

export default class Popular extends Component {
  static defaultProps = {
    list: []
  }

  render () {
    const { list } = this.props
    return (
      <View className='home-popular'>
        <HomeTitle
          title='人气推荐'
        />
        <View className='home-popular__show'>
        </View>
        <View className='home-popular__list'>
          {list.slice(0, 3).map(item => (
            <View key={item.id} className='home-popular__list-item'>
              <Image
                className='home-popular__list-item-img'
                src={item.listPicUrl}
              />
              {item.limitedTag &&
                <Tag text={item.limitedTag} />
              }
              <View className='home-popular__list-item-wrap'>
                <Text className='home-popular__list-item-name'>
                  {item.name}
                  <Text className='home-popular__list-item-price'>
                    {` ¥${item.activityPrice}`}
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
