import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import classNames from 'classnames'
import './index.scss'

export default class Tag extends Component {
  static defaultProps = {
    compStyle: '',
    textStyle: ''
  }

  getCls = (base) => {
    const { size } = this.props
    return classNames(
      base,
      size && `${base}--size-${size}`
    )
  }

  render () {
    const { compStyle, textStyle, text } = this.props
    return (
      <View
        className={this.getCls('comp-tag')}
        style={compStyle}
      >
        <Text
          className={this.getCls('comp-tag__txt')}
          style={textStyle}
        >
          {text}
        </Text>
      </View>
    )
  }
}

