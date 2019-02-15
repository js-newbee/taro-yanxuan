import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { Tag } from '@components'
import './index.scss'

export default class Recommend extends Component {
  static defaultProps = {
    list: []
  }

  handleClick = () => {
    Taro.showToast({
      title: '敬请期待',
      icon: 'none'
    })
  }

  render () {
    const { list } = this.props
    return (
      <View className='cart-recommend'>
        <View className='cart-recommend__title'>
          {this.props.children}
        </View>
        <View className='cart-recommend__list'>
          {list.map(item => (
            <View
              key={item.id}
              className='cart-recommend__list-item'
              onClick={this.handleClick.bind(this, item)}
            >
              <Image className='cart-recommend__list-item-img' src={item.listPicUrl} />
              <View className='cart-recommend__list-item-info'>
                {!!item.limitedTag &&
                  <Tag text={item.limitedTag} />
                }
                <Text className='cart-recommend__list-item-name' numberOfLines={1}>
                  {item.name}
                </Text>

                <View className='cart-recommend__list-item-price-wrap'>
                  <Text className='cart-recommend__list-item-price'>
                    ¥{item.activityPrice || item.retailPrice}
                  </Text>
                  {!!item.activityPrice &&
                    <Text className='cart-recommend__list-item-price--origin'>
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
