import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import pic from './assets/activity.png'
import picActive from './assets/activity-active.png'
import './index.scss'

export default class Activity extends Component {
  state = {
    active: false
  }
  timer = null

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ active: !this.state.active })
    }, 600)
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  render () {
    return (
      <View className='user-activity'>
        <Image
          className='user-activity__img'
          src={this.state.active ? picActive : pic}
        />
      </View>
    )
  }
}
