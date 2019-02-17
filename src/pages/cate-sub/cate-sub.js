import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView, Swiper, SwiperItem } from '@tarojs/components'
import { ItemList, Loading } from '@components'
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
      current: 0,
      loaded: false,
      loading: {}
    }
    this.subId = parseInt(this.$router.params.subId)
    this.categoryId = parseInt(this.$router.params.categoryId)
  }

  componentDidMount() {
    const payload = { categoryId: this.categoryId }
    this.props.dispatchSubMenu(payload).then((res) => {
      this.setState({ loaded: true })

      const { category: { name, subCategoryList } } = res
      Taro.setNavigationBarTitle({ title: name })
      setTimeout(() => {
        const index = subCategoryList.findIndex(item => item.id === this.subId)
        this.handleMenu(index)
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
    const { loading } = this.state
    if (loading[id]) {
      return
    }

    this.setState({ loading: { ...loading, [id]: true } })
    this.props.dispatchSubList({
      categoryL1Id: this.categoryId,
      categoryL2Id: id
    })
  }

  render () {
    const { subMenu, subCategory } = this.props
    const { current } = this.state
    const height = getWindowHeight(false)

    if (!this.state.loaded) {
      return <Loading />
    }

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
          {subMenu.map(item => {
            const list = subCategory[item.id] || []
            return (
              <SwiperItem key={item.id} className='cate-sub__swiper-item'>
                {!!list.length &&
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
                    <View className='cate-sub__list-tip'>
                      <Text className='cate-sub__list-tip-txt'>横向滑动切换其他分类</Text>
                    </View>
                  </ScrollView>
                }
              </SwiperItem>
            )
          })}
        </Swiper>
      </View>
    )
  }
}

export default CateSub
