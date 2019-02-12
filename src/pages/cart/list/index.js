import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { CheckboxItem, InputNumber } from '@components'
import './index.scss'

export default class List extends Component {
  static defaultProps = {
    list: [],
    onUpdate: () => {},
    onToggle: () => {},
    onRemove: () => {}
  }

  handleUpdate = (item, num) => {
    this.props.onUpdate({ id: item.id, num })
  }

  handleToggle = (item) => {
    this.props.onToggle({ id: item.id })
  }

  handleRemove = () => {
    // TODO 左滑删除
  }

  isSelected = id => this.props.list.some(item => item.selected && item.id === id)

  render () {
    const { list } = this.props
    return (
      <View className='cart-list'>
        {list.map(item => (
          <View
            key={item.id}
            className='cart-list__item'
          >
            <CheckboxItem
              checked={this.isSelected(item.id)}
              onClick={this.handleToggle.bind(this, item)}
            />
            <Image
              className='cart-list__item-img'
              src={item.img}
            />
            <View className='cart-list__item-info'>
              <View className='cart-list__item-title'>
                {!!item.tag &&
                  <Text className='cart-list__item-title-tag'>{item.tag}</Text>
                }
                {/* XXX RN 上实现省略号需要用 numberOfLines 实现 */}
                <Text
                  className='cart-list__item-title-name'
                  numberOfLines={1}
                >
                  {item.name}
                </Text>
              </View>

              <View className='cart-list__item-spec'>
                <Text className='cart-list__item-spec-txt'>{item.spec.join(' ')}</Text>
              </View>

              <View className='cart-list__item-wrap'>
                <Text className='cart-list__item-price'>
                  ¥{item.price}
                </Text>
                <View className='cart-list__item-num'>
                  <InputNumber
                    num={item.num}
                    onChange={this.handleUpdate.bind(this, item)}
                  />
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    )
  }
}
