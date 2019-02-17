import Taro, { Component } from '@tarojs/taro'
import { View, Image, Input } from '@tarojs/components'
import iconClose from './assets/clear.png'
import './index.scss'

export default class InputItem extends Component {
  static defaultProps = {
    type: 'text',
    value: '',
    placeholder: '',
    focus: false,
    password: false,
    compStyle: '',
    inputStyle: '',
    onInput: () => {},
    onFocus: () => {},
    onBlur: () => {}
  }

  handleInput = (e) => {
    this.props.onInput(e.detail.value)
  }

  handleClear = () => {
    this.props.onInput('')
  }

  render () {
    const {
      type, value, placeholder, focus, password,
      compStyle, inputStyle,
      onFocus, onBlur
    } = this.props

    return (
      <View className='comp-input-item' style={compStyle}>
        <Input
          className='comp-input-item__input'
          style={inputStyle}
          type={type}
          value={value}
          focus={focus}
          password={password}
          placeholder={placeholder}
          placeholderClass='comp-input-item__input--placeholder'
          onInput={this.handleInput}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {!!value &&
          <View className='comp-input-item__clear' onClick={this.handleClear}>
            <Image className='comp-input-item__clear-img' src={iconClose} />
          </View>
        }
      </View>
    )
  }
}

