import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { HomeTitle } from '@components'
import classNames from 'classnames'
import './index.scss'

export default class Category extends Component {
  static defaultProps = {
    list: []
  }

  render () {
    const { list } = this.props
    return (
      <View className='home-category'>
        <HomeTitle
          title='类目热销榜'
        />
        <View className='home-category__two'>
          {list.slice(0, 2).map((item, index) => (
            <View
              key={index}
              className={classNames('home-category__two-item',
                `home-category__two-item--index-${index}`
              )}
            >
              <View className='home-category__two-item-wrap'>
                <Text className='home-category__two-item-name'>{item.categoryName}</Text>
                <View className='home-category__two-item-line' />
              </View>
              <Image className='home-category__two-item-img' src={item.picUrl} />
            </View>
          ))}
        </View>
        <View className='home-category__list'>
          {list.slice(2, 10).map((item, index) => (
            <View key={index} className='home-category__list-item'>
              <Text className='home-category__list-item-name'>{item.categoryName}</Text>
              <Image className='home-category__list-item-img' src={item.picUrl} />
            </View>
          ))}
        </View>
      </View>
    )
  }
}
