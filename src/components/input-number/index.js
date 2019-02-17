import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import classNames from 'classnames'
import minusIcon from './assets/minus.png'
import minusDisabledIcon from './assets/minus-disabled.png'
import plusIcon from './assets/plus.png'
import './index.scss'

export default class InputNumber extends Component {
  static defaultProps = {
    num: 0,
    compStyle: '',
    optStyle: '',
    numStyle: '',
    onChange: () => {}
  }

  handleMinus = () => {
    if (this.props.num > 1) {
      this.props.onChange(this.props.num - 1)
    }
  }

  handlePlus = () => {
    this.props.onChange(this.props.num + 1)
  }

  render () {
    const { num, compStyle, numStyle } = this.props
    const isMinusDisabled = num <= 1
    return (
      <View className='comp-input-number' style={compStyle}>
        <View
          className={classNames('comp-input-number__minus',
            isMinusDisabled && 'comp-input-number__minus--disabled'
          )}
          onClick={this.handleMinus}
        >
          <Image
            className='comp-input-number__minus-img'
            src={isMinusDisabled ? minusDisabledIcon : minusIcon}
          />
        </View>
        <View
          className='comp-input-number__num'
          style={numStyle}
        >
          <Text className='comp-input-number__num-txt'>{num}</Text>
        </View>
        <View
          className='comp-input-number__plus'
          onClick={this.handlePlus}
        >
          <Image
            className='comp-input-number__plus-img'
            src={plusIcon}
          />
        </View>
      </View>
    )
  }
}

