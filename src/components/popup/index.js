import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView, Image } from '@tarojs/components'
import classNames from 'classnames'
import closeIcon from './assets/close.png'
import './index.scss'

export default class Popup extends Component {
  static defaultProps = {
    visible: false,
    compStyle: '',
    onClose: () => {}
  }

  constructor (props) {
    super(props)
    this.state = {
      isShow: props.visible
    }
  }

  componentWillReceiveProps (nextProps) {
    const { visible } = nextProps
    const { isShow } = this.state
    if (visible !== isShow) {
      this.setState({
        isShow: visible
      })
    }
  }

  handleClose = () => {
    this.props.onClose()
  }

  handleTouchMove = e => {
    e.stopPropagation()
  }

  render () {
    const { onClose, compStyle } = this.props
    const { isShow } = this.state

    return (
      <View
        className={classNames('comp-popup', isShow && 'comp-popup--visible')}
        onTouchMove={this.handleTouchMove}
        style={compStyle}
      >
        <View className='comp-popup__mask' onClick={onClose} />
        <View className='comp-popup__wrapper'>
          <ScrollView
            scrollY
            className='comp-popup__content'
            style={{ height: Taro.pxTransform(750) }}
          >
            {this.props.children}
          </ScrollView>
          <View className='comp-popup__close' onClick={onClose}>
            <Image className='comp-popup__close-img' src={closeIcon} />
          </View>
        </View>
      </View>
    )
  }
}

