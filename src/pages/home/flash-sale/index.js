import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { HomeTitle } from '@components'
import './index.scss'

export default class FlashSale extends Component {
  static defaultProps = {
    data: {}
  }

  constructor(props) {
    super(props)
    this.state = {
      leftTime: parseInt((props.data.leftTime || 0) / 1000)
    }
    this.timer = null
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.leftTime > 0) {
        this.setState({ leftTime: this.state.leftTime - 1 })
      }
    }, 1000)
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  renderNum = (num) => num >= 10 ? num : `0${num}`

  render () {
    const { data: { itemList = [] } } = this.props
    const { leftTime } = this.state

    return (
      <View className='home-flash-sale'>
        <HomeTitle
          title='限时购'
          link='#'
        >
          <View className='home-flash-sale__cnt'>
            <Text className='home-flash-sale__cnt-time'>
              {this.renderNum(parseInt(leftTime / 3600))}
            </Text>
            <Text className='home-flash-sale__cnt-split'>:</Text>
            <Text className='home-flash-sale__cnt-time'>
              {this.renderNum(parseInt(leftTime / 60) % 60)}
            </Text>
            <Text className='home-flash-sale__cnt-split'>:</Text>
            <Text className='home-flash-sale__cnt-time'>
              {this.renderNum(leftTime % 60)}
            </Text>
          </View>
        </HomeTitle>

        <View className='home-flash-sale__list'>
          {itemList.map(item => (
            <View key={item.itemId} className='home-flash-sale__list-item'>
              <Image
                className='home-flash-sale__list-item-img'
                src={item.listPicUrl}
              />
              <View className='home-flash-sale__list-item-wrap'>
                <Text className='home-flash-sale__list-item-price'>¥{item.actualPrice}</Text>
                <Text className='home-flash-sale__list-item-origin'>¥{item.retailPrice}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    )
  }
}
