import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import * as actions from '@actions/cart'
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

  componentDidMount() {
    this.props.dispatchRecommend()
  }

  render () {
    const { list, recommend } = this.props
    const selected = list.filter(item => item.selected)
    const amount = selected.reduce((prev, next) => prev + next.price, 0)
    const isEmpty = !list.length
    const isShowFooter = !isEmpty

    return (
      <View className='cart'>
        <ScrollView
          scrollY
          className='cart__wrap'
          style={{ height: getWindowHeight() }}
        >
          <Tip />
          {!isEmpty && <Gift amount={amount} />}
          {!isEmpty ?
            <List
              list={list}
              onToggle={this.props.dispatchToggleItem}
              onUpdate={this.props.dispatchUpdateItem}
              onRemove={this.props.dispatchRemoveItem}
            /> :
            <Empty />
          }
          <Recommend list={recommend} />
          {isShowFooter &&
            <View className='cart__footer--placeholder' />
          }
        </ScrollView>
        {isShowFooter &&
          <View className='cart__footer'>
            <Footer
              selectedCount={selected.length}
              amount={amount}
              onToggle={this.props.dispatchToggleAll}
            />
          </View>
        }
      </View>
    )
  }
}

export default Index
