import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { Tag } from '@components'
import defaultAvatar from '@assets/default-avatar.png'
import './index.scss'

export default class Recommend extends Component {
  static defaultProps = {
    list: []
  }

  handleClick = (item) => {
    Taro.navigateTo({
      url: `/pages/item/item?itemId=${item.id}`
    })
  }

  render () {
    const { list } = this.props
    return (
      <View className='home-recommend'>
        <View className='home-recommend__title'>
          <Text className='home-recommend__title-txt'>为你推荐</Text>
        </View>
        <View className='home-recommend__list'>
          {list.map(item => (
            <View
              key={item.id}
              className='home-recommend__list-item'
              onClick={this.handleClick.bind(this, item)}
            >
              <Image className='home-recommend__list-item-img' src={item.listPicUrl} />
              {!!item.simpleDesc && !item.simpleDescClose &&
                <Text className='home-recommend__list-item-desc' numberOfLines={1}>
                  {item.simpleDesc}
                </Text>
              }
              <View className='home-recommend__list-item-info'>
                {!!item.limitedTag &&
                  <Tag text={item.limitedTag} />
                }

                <Text className='home-recommend__list-item-name' numberOfLines={1}>
                  {item.name}
                </Text>

                <View className='home-recommend__list-item-price-wrap'>
                  <Text className='home-recommend__list-item-price'>
                    ¥{item.activityPrice || item.retailPrice}
                  </Text>
                  {!!item.activityPrice &&
                    <Text className='home-recommend__list-item-price--origin'>
                      ¥{item.retailPrice}
                    </Text>
                  }
                </View>

                {!!(item.comments && item.comments[0] && item.comments[0].content) &&
                  <View className='home-recommend__list-item-commend'>
                    <Image
                      className='home-recommend__list-item-commend-img'
                      src={item.comments[0].frontUserAvatar || defaultAvatar}
                    />
                    <Text className='home-recommend__list-item-commend-txt' numberOfLines={2}>
                      {item.comments[0].content}
                    </Text>
                  </View>
                }
              </View>
            </View>
          ))}
        </View>
      </View>
    )
  }
}
