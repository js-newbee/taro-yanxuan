import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import classNames from 'classnames'
import './index.scss'

export default class Banner extends Component {
  static defaultProps = {
    list: [],
    onChange: () => {}
  }

  handleClick = (index) => {
    this.props.onChange(index)
  }

  render () {
    const { list, current } = this.props
    return (
      <ScrollView
        scrollX
        className='cate-sub-tab'
        style={{ width: '100%' }}
      >
        {list.map((item, index) => (
          <View
            key={item.id}
            className='cate-sub-tab__item'
            onClick={this.handleClick.bind(this, index)}
          >
            <Text
              className={classNames('cate-sub-tab__item-txt',
                index === current && 'cate-sub-tab__item-txt--active'
              )}
            >
              {item.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    )
  }
}
