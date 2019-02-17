import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { Tag } from '@components'
import './index.scss'

export default class ItemList extends Component {
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
      <View className='comp-item-list'>
        <View className='comp-item-list__title'>
          {this.props.children}
        </View>
        <View className='comp-item-list__wrap'>
          {list.map(item => (
            <View
              key={item.id}
              className='comp-item-list__item'
              onClick={this.handleClick.bind(this, item)}
            >
              <Image className='comp-item-list__item-img' src={item.listPicUrl} />
              <View className='comp-item-list__item-info'>
                {!!item.limitedTag &&
                  <Tag text={item.limitedTag} />
                }
                <Text className='comp-item-list__item-name' numberOfLines={1}>
                  {item.name}
                </Text>

                <View className='comp-item-list__item-price-wrap'>
                  <Text className='comp-item-list__item-price'>
                    ¥{item.activityPrice || item.retailPrice}
                  </Text>
                  {!!item.activityPrice &&
                    <Text className='comp-item-list__item-price--origin'>
                      ¥{item.retailPrice}
                    </Text>
                  }
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    )
  }
}
