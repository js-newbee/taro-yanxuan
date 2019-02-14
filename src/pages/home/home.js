import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
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
import searchIcon from './assets/search.png'
import './home.scss'

const RECOMMEND_SIZE = 20

@connect(state => state.home, actions)
class Home extends Component {
  config = {
    navigationBarTitleText: '网易严选'
  }

  state = {
    loaded: false,
    lastItemId: 0,
    hasMore: true
  }

  componentDidShow() {
    this.props.dispatchHome().then(() => {
      this.setState({ loaded: true })
    })
    this.props.dispatchSearchCount()
    this.props.dispatchPin({ orderType: 4, size: 12 })
    this.loadRecommend()
  }

  loadRecommend = () => {
    if (!this.state.hasMore) {
      return
    }

    const payload = {
      lastItemId: this.state.lastItemId,
      size: RECOMMEND_SIZE
    }
    this.props.dispatchRecommend(payload).then((res) => {
      const lastItem = res.itemList[res.itemList.length - 1]
      this.setState({
        hasMore: res.hasMore,
        lastItemId: lastItem && lastItem.id
      })
    })
  }

  toSearch = () => {
    // TODO 搜索页
    Taro.showToast({
      title: '敬请期待',
      icon: 'none'
    })
  }

  render () {
    if (!this.state.loaded) {
      return null
    }

    const { homeInfo, searchCount, recommend, pin } = this.props
    return (
      <View className='home'>
        <View className='home__search'>
          <View
            className='home__search-wrap'
            onClick={this.toSearch}
          >
            <Image className='home__search-img' src={searchIcon} />
            <Text className='home__search-txt'>
              {`搜索商品，共${searchCount}款好物`}
            </Text>
          </View>
        </View>
        <ScrollView
          scrollY
          className='home__wrap'
          style={{ height: getWindowHeight() }}
        >
          <Banner list={homeInfo.focus} />
          <Policy list={homeInfo.policyDesc} />

          {/* 免费拼团 */}
          <Pin
            banner={homeInfo.newUserExclusive}
            list={pin}
          />

          {/* 不知道叫啥 */}
          <Operation
            list={homeInfo.operationCfg}
            sale={homeInfo.saleCenter}
          />

          {/* 品牌制造 */}
          <Manufactory
            data={homeInfo.manufactory}
            boss={homeInfo.dingBossRcmd}
          />

          {/* 限时购 */}
          <FlashSale data={homeInfo.flashSale} />

          {/* 人气推荐 */}
          <Popular data={homeInfo.popularItems} />

          {/* 类目热销榜 */}
          <Category data={homeInfo.hotCategory} />

          {/* 为你推荐 */}
          <Recommend list={recommend} />
        </ScrollView>
      </View>
    )
  }
}

export default Home
