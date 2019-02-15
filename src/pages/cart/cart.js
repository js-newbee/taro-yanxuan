import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import { ButtonItem } from '@components'
import { connect } from '@tarojs/redux'
import * as actions from '@actions/cart'
import { API_CHECK_LOGIN } from '@constants/api'
import fetch from '@utils/request'
import { getWindowHeight } from '@utils/style'
import Tip from './tip'
import Gift from './gift'
import Empty from './empty'
import List from './list'
import Recommend from './recommend'
import Footer from './footer'
import './cart.scss'

@connect(state => state.cart, actions)
class Index extends Component {
  config = {
    navigationBarTitleText: '购物车'
  }

  state = {
    login: false
  }

  componentDidMount() {
    fetch({ url: API_CHECK_LOGIN, showToast: false, autoLogin: false }).then((res) => {
      if (res) {
        this.setState({ login: true })
        this.props.dispatchCart()
        this.props.dispatchCartNum()
        this.props.dispatchRecommend()
      } else {
        this.setState({ login: false })
      }
    })
  }

  toLogin = () => {
    Taro.navigateTo({
      url: '/pages/user-login/user-login'
    })
  }

  render () {
    const { cartInfo, list, recommend } = this.props
    const { cartGroupList = [] } = cartInfo
    const cartList = (cartGroupList[1] && cartGroupList[1].cartItemList) || []
    const extList = recommend.extList || []
    const selected = list.filter(item => item.selected)
    const amount = selected.reduce((prev, next) => prev + next.price, 0)
    const isEmpty = !cartList.length
    const isShowFooter = !isEmpty

    if (!this.state.login) {
      return (
        <View className='cart cart--not-login'>
          <Empty text='未登陆' />
          <View className='cart__login'>
            <ButtonItem
              type='primary'
              text='登录'
              onClick={this.toLogin}
              compStyle={{
                background: '#b59f7b',
                borderRadius: Taro.pxTransform(4)
              }}
            />
          </View>
        </View>
      )
    }

    return (
      <View className='cart'>
        <ScrollView
          scrollY
          className='cart__wrap'
          style={{ height: getWindowHeight() }}
        >
          <Tip list={cartInfo.policyDescList} />
          {!isEmpty && <Gift data={cartGroupList[0]} />}
          {!isEmpty ?
            <List
              list={cartList}
              onToggle={this.props.dispatchToggleItem}
              onUpdate={this.props.dispatchUpdateItem}
              onRemove={this.props.dispatchRemoveItem}
            /> :
            <Empty />
          }

          {/* 相关推荐 */}
          {extList.map((ext, index) => (
            <Recommend key={index} list={ext.itemList}>
              <View className='cart__ext'>
                {!!ext.picUrl && <Image className='cart__ext-img' src={ext.picUrl} />}
                <Text className='cart__ext-txt'>{ext.desc}</Text>
              </View>
            </Recommend>
          ))}

          {/* 猜你喜欢 */}
          <Recommend list={recommend.itemList}>
            <View className='cart__recommend'>
              <Text className='cart__recommend-txt'>{recommend.desc}</Text>
            </View>
          </Recommend>

          {isShowFooter &&
            <View className='cart__footer--placeholder' />
          }
        </ScrollView>
        {isShowFooter &&
          <View className='cart__footer'>
            <Footer
              cartInfo={cartInfo}
              onToggle={this.props.dispatchToggleAll}
            />
          </View>
        }
      </View>
    )
  }
}

export default Index
