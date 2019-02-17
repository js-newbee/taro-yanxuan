import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import checkedIcon from './assets/checked.png'
import unCheckedIcon from './assets/un-checked.png'
import './index.scss'

export default class CheckBoxItem extends Component {
  static defaultProps = {
    compStyle: '',
    checked: false,
    onClick: () => {}
  }

  render () {
    const { compStyle, checked } = this.props
    return (
      <View
        className='comp-checkbox'
        style={compStyle}
        onClick={this.props.onClick}
      >
        <Image
          className='comp-checkbox__img'
          src={checked ? checkedIcon : unCheckedIcon}
        />
        {this.props.children}
      </View>
    )
  }
}
