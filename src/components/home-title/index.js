import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class HomeTitle extends Component {
  static defaultProps = {
    title: '',
    link: ''
  }

  handleClick = () => {
    // TODO
  }

  render () {
    const { title, link } = this.props
    return (
      <View className='comp-home-title'>
        <Text className='comp-home-title__txt'>{title}</Text>
        <View className='comp-home-title__content'>
          {this.props.children}
        </View>
        {!!link &&
          <Text
            className='comp-home-title__link'
            onClick={this.handleClick}
          >
            {'更多 >'}
          </Text>
        }
      </View>
    )
  }
}

