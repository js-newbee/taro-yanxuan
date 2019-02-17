import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import gift from './assets/gift.png'
import right from './assets/right.png'
import './index.scss'

export default class Vip extends Component {
  state = {
    x: 0
  }
  timer = null
  count = 0

  componentDidMount() {
    this.animate()
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer)
    }
  }

  animate = () => {
    /**
     * // NOTE 由于 Taro.createAnimation 还不支持 RN，目前只能自己实现
     * 核心要点都是通过 state + style 实现
     * 如下是随手写的很粗糙的动画，见笑了
     */
    this.timer = setTimeout(() => {
      if (this.state.x === 0 || this.state.x === -15) {
        this.count += 1
      }
      this.setState({ x: this.state.x + (this.count % 2 ? -1 : 1) })
      if (this.count <= 6) {
        this.animate()
      }
    }, 20)
  }

  getAnimateStyle = () => {
    /**
     * // NOTE 样式文件中的 transform 属性能正确编译为 RN 支持的格式，但在 js 中目前需要自行处理
     * 这边主要注意 RN 的 transform 写法与一般 css 是不同的
     **/
    if (process.env.TARO_ENV === 'rn') {
      return { transform: [{ translateX: this.state.x }] }
    }
    return { transform: `translateX(${Taro.pxTransform(this.state.x)})` }
  }

  render () {
    return (
      <View
        className='user-profile-vip'
        style={this.getAnimateStyle()}
      >
        <Image
          className='user-profile-vip__gift'
          src={gift}
        />
        <View className='user-profile-vip__desc'>
          <Text className='user-profile-vip__desc-txt'>超级会员</Text>
          <View className='user-profile-vip__desc-wrap'>
            <Text className='user-profile-vip__desc-wrap-txt'>免费试用</Text>
            <Image
              className='user-profile-vip__desc-wrap-img'
              src={right}
            />
          </View>
        </View>
      </View>
    )
  }
}
