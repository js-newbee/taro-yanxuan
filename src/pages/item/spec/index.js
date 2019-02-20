import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { InputNumber } from '@components'
import classNames from 'classnames'
import './index.scss'

export default class Spec extends Component {
  static defaultProps = {
    data: {},
    selected: {},
    onSelect: () => {}
  }

  state = {
    selected: {},
    img: '',
    cnt: 1
  }

  isValid = item => {
    // XXX 暂未实现多规格时的判断逻辑
    const { data: { skuMap = {}, skuSpecList = [] } } = this.props
    if (skuSpecList.length > 1) {
      return true
    }

    return skuMap[item.id] ? skuMap[item.id].sellVolume : false
  }

  isSelected = (item, groupId) => this.state.selected[groupId] === item.id

  handleSelect = (item, groupId) => {
    if (this.isValid(item)) {
      const selected = {
        ...this.state.selected,
        [groupId]: item.id
      }
      const id = Object.keys(selected).sort((a, b) => a - b).map(key => selected[key]).join(';')

      this.setState({ selected })
      if (item.picUrl) {
        this.setState({ img: item.picUrl })
      }
      this.props.onSelect({ id, cnt: this.state.cnt })
    }
  }

  handleUpdate = (cnt) => {
    this.setState({ cnt })
  }

  render () {
    const { data } = this.props
    const { skuSpecList = [] } = data

    return (
      <View className='item-spec'>
        <View className='item-spec__info'>
          <Image
            className='item-spec__info-img'
            src={this.state.img || data.primaryPicUrl}
          />
          <View className='item-spec__info-wrap'>
            <View className='item-spec__info-price'>
              <Text className='item-spec__info-price-txt'>
                {`价格:¥${data.activityPrice || data.retailPrice}`}
              </Text>
              {!!data.activityPrice &&
                <Text className='item-spec__info-price-origin'>¥{data.retailPrice}</Text>
              }
            </View>
            <Text className='item-spec__info-tip'>请选择规格属性</Text>
          </View>
        </View>

        {skuSpecList.map(group => (
          <View key={group.id} className='item-spec__group'>
            <Text className='item-spec__group-title'>{group.name}</Text>
            <View className='item-spec__group-list'>
              {group.skuSpecValueList.map(item => (
                <Text
                  key={item.id}
                  className={classNames('item-spec__group-list-item', {
                    'item-spec__group-list-item--active': this.isSelected(item, group.id),
                    'item-spec__group-list-item--disabled': !this.isValid(item)
                  })}
                  onClick={this.handleSelect.bind(this, item, group.id)}
                >
                  {item.value}
                </Text>
              ))}
            </View>
          </View>
        ))}

        <View className='item-spec__group'>
          <Text className='item-spec__group-title'>数量</Text>
          <InputNumber
            num={this.state.cnt}
            onChange={this.handleUpdate}
            compStyle={{
              marginTop: Taro.pxTransform(20),
              height: Taro.pxTransform(68)
            }}
            numStyle={{
              width: Taro.pxTransform(130)
            }}
          />
        </View>
      </View>
    )
  }
}
