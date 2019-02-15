import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView, Swiper, SwiperItem } from '@tarojs/components'
import { ItemList } from '@components'
import { connect } from '@tarojs/redux'
import * as actions from '@actions/cate'
import { getWindowHeight } from '@utils/style'
import Tab from './tab'
import './cate-sub.scss'

@connect(state => state.cate, actions)
class CateSub extends Component {
  config = {
    navigationBarTitleText: ''
  }

  constructor(props) {
    super(props)
    this.state = {
      current: 0
    }
    this.categoryId = parseInt(this.$router.params.categoryId)
  }

  componentDidMount() {
    const payload = { categoryId: this.categoryId }
    this.props.dispatchSubMenu(payload).then((res) => {
      Taro.setNavigationBarTitle({ title: res.category.name })
      setTimeout(() => {
        this.handleMenu(0)
      }, 0)
    })
  }

  handleMenu = (index) => {
    const menu = this.props.subMenu[index]
    this.setState({ current: index })
    this.loadList(menu.id)
  }

  handleChange = (e) => {
    const { subMenu, subCategory } = this.props
    const { current } = e.detail
    this.setState({ current })

    const menu = subMenu[current]
    if (!subCategory[menu.id]) {
      this.loadList(menu.id)
    }
  }

  loadList = (id) => {
    this.props.dispatchSubList({
      categoryL1Id: this.categoryId,
      categoryL2Id: id
    })
  }

  render () {
    const { subMenu, subCategory } = this.props
    const { current } = this.state
    const menu = subMenu[current] || {}
    const list = subCategory[menu.id] || []
    const height = getWindowHeight(false)

    return (
      <View className='cate-sub'>
        <View className='cate-sub__menu'>
          <Tab
            list={subMenu}
            current={current}
            onChange={this.handleMenu}
          />
        </View>
        {/* 用 Swiper 实现左右滑动效果 */}
        <Swiper
          className='cate-sub__swiper'
          current={current}
          onChange={this.handleChange}
          style={{ height }}
        >
          {subMenu.map(item => (
            <SwiperItem key={item.id} className='cate-sub__swiper-item'>
              <ScrollView
                scrollY
                className='cate-sub__list'
                style={{ height }}
              >
                <ItemList list={list}>
                  <View className='cate-sub__list-title'>
                    <Text className='cate-sub__list-title-txt'>
                      {item.frontName}
                    </Text>
                  </View>
                </ItemList>
                {!!list.length &&
                  <View className='cate-sub__list-tip'>
                    <Text className='cate-sub__list-tip-txt'>横向滑动切换其他分类</Text>
                  </View>
                }
              </ScrollView>
            </SwiperItem>
          ))}
        </Swiper>
      </View>
    )
  }
}

export default CateSub
