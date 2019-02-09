import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import * as actions from '@actions/cate'
import { getWindowHeight } from '@utils/style'
import Menu from './menu'
import List from './list'
import Banner from './banner'
import './cate.scss'

@connect(state => state.cate, actions)
class Cate extends Component {
  config = {
    navigationBarTitleText: '分类'
  }

  state = {
    current: -1,
    loading: false
  }

  componentDidMount() {
    getWindowHeight()
    this.props.dispatchMenu().then((res) => {
      this.loadList(res.data.list[0] && res.data.list[0].id)
    })
  }

  loadList = (id) => {
    this.setState({ current: id })
    return this.props.dispatchList({ id })
  }

  handleMenu = (id) => {
    this.setState({ loading: true })
    this.loadList(id).then(() => {
      this.setState({ loading: false })
    })
  }

  render () {
    const { menu, list, banner } = this.props
    const { current, loading } = this.state
    const height = getWindowHeight()

    return (
      <View className='cate'>
        <ScrollView
          scrollY
          className='cate__menu'
          style={{ height }}
        >
          <Menu
            current={current}
            list={menu}
            onClick={this.handleMenu}
          />
        </ScrollView>
        {/* 通过切换元素实现重置 ScrollView 的 scrollTop */}
        {loading ?
          <View /> :
          <ScrollView
            scrollY
            className='cate__list'
            style={{ height }}
          >
            <View className='cate__list-wrap'>
              <Banner banner={banner} />
              <List list={list} />
            </View>
          </ScrollView>
        }
      </View>
    )
  }
}

export default Cate
