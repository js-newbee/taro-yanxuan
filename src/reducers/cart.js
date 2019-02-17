import Taro from '@tarojs/taro'
import {
  CART_INFO, CART_NUM, CART_RECOMMEND,
  CART_ADD, CART_UPDATE, CART_UPDATE_CHECK
} from '@constants/cart'

const INITIAL_STATE = {
  cartInfo: {},
  recommend: {}
}

// TODO H5、RN 还不支持 setTabBarBadge
const updateTabBar = (count) => {
  if (count > 0) {
    Taro.setTabBarBadge({
      index: 2,
      text: `${count}`
    })
  } else {
    Taro.removeTabBarBadge({
      index: 2
    })
  }
}

export default function cart(state = INITIAL_STATE, action) {
  switch(action.type) {
    case CART_INFO:
    case CART_ADD:
    case CART_UPDATE:
    case CART_UPDATE_CHECK: {
      return {
        ...state,
        cartInfo: action.payload
      }
    }
    case CART_NUM: {
      updateTabBar(action.payload.countCornerMark)
      return state
    }
    case CART_RECOMMEND: {
      return {
        ...state,
        recommend: action.payload
      }
    }
    default:
      return state
  }
}
