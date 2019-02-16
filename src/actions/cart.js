import {
  CART_INFO, CART_NUM, CART_RECOMMEND,
  CART_ADD, CART_UPDATE, CART_UPDATE_CHECK
} from '@constants/cart'
import {
  API_CART, API_CART_NUM, API_CART_RECOMMEND,
  API_CART_ADD, API_CART_UPDATE, API_CART_UPDATE_CHECK
} from '@constants/api'
import { createAction } from '@utils/redux'

/**
 * 购物车信息
 * @param {*} payload
 */
export const dispatchCart = payload => createAction({
  url: API_CART,
  type: CART_INFO,
  payload
})

/**
 * 购物车物品数量
 * @param {*} payload
 */
export const dispatchCartNum = payload => createAction({
  url: API_CART_NUM,
  fetchOptions: {
    showToast: false,
    autoLogin: false
  },
  type: CART_NUM,
  payload
})

/**
 * 购物车推荐
 * @param {*} payload
 */
export const dispatchRecommend = payload => createAction({
  url: API_CART_RECOMMEND,
  type: CART_RECOMMEND,
  payload
})

/**
 * 添加商品到购物车
 * @param {*} payload
 */
export const dispatchAdd = payload => createAction({
  url: API_CART_ADD,
  method: 'POST',
  type: CART_ADD,
  payload
})

/**
 * 更新商品信息
 * @param {*} payload
 */
export const dispatchUpdate = payload => createAction({
  url: API_CART_UPDATE,
  method: 'POST',
  type: CART_UPDATE,
  payload
})

/**
 * 更新商品选中状态
 * @param {*} payload
 */
export const dispatchUpdateCheck = payload => createAction({
  url: API_CART_UPDATE_CHECK,
  method: 'POST',
  type: CART_UPDATE_CHECK,
  payload
})
