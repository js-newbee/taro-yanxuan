import Taro, { Component } from '@tarojs/taro'
import { Button, Text } from '@tarojs/components'
import { postcss } from '@utils/style'
import classNames from 'classnames'
import './index.scss'

export default class ButtonItem extends Component {
  static defaultProps = {
    compStyle: '',
    textStyle: '',
    plain: false,
    loading: false,
    disabled: false,
    onClick: () => {}
  }

  getCls = (base) => {
    const { type, plain, disabled } = this.props
    return classNames(
      base,
      type === 'primary' && `${base}--primary`,
      plain && `${base}--plain`,
      disabled && `${base}--disabled`
    )
  }

  render () {
    const { compStyle, textStyle, loading, disabled, text, onClick } = this.props
    return (
      <Button
        className={this.getCls('comp-button')}
        style={postcss(compStyle)}
        loading={loading}
        disabled={disabled}
        onClick={onClick}
      >
        <Text
          className={this.getCls('comp-button__txt')}
          style={textStyle}
        >
          {text}
        </Text>
      </Button>
    )
  }
}

