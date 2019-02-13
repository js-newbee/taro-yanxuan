import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import * as actions from '@actions/home'
import { getWindowHeight } from '@utils/style'
import Banner from './banner'
import Policy from './policy'
import Pin from './pin'
import Operation from './operation'
import Manufactory from './manufactory'
import FlashSale from './flash-sale'
import Popular from './popular'
import Category from './category'
import Recommend from './recommend'
import './home.scss'

@connect(state => state.home, actions)
class Home extends Component {
  config = {
    navigationBarTitleText: '网易严选'
  }

  componentDidMount() {
    this.props.dispatchInfo()
  }

  render () {
    const { banner, pin } = this.props
    return (
      <View className='home'>
        <View className='home__search'>
          <View className='home__search-wrap'>
            <Text className='home__search-txt'>搜索商品，共21106款好物</Text>
          </View>
        </View>
        <ScrollView
          scrollY
          className='home__wrap'
          style={{ height: getWindowHeight() }}
        >
          <Banner list={banner} />
          <Policy />

          {/* 免费拼团 */}
          <Pin list={pin} />

          {/* 不知道叫啥 */}
          <Operation />

          {/* 品牌制造 */}
          <Manufactory />

          {/* 限时购 */}
          <FlashSale />

          {/* 人气推荐 */}
          <Popular />

          {/* 类目热销榜 */}
          <Category />

          {/* 为你推荐 */}
          <Recommend />
        </ScrollView>
      </View>
    )
  }
}

export default Home
