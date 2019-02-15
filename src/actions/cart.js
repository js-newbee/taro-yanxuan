import {
  CART_INFO, CART_NUM, CART_RECOMMEND,
  CART_ADD_ITEM, CART_REMOVE_ITEM, CART_UPDATE_ITEM,
  CART_TOGGLE_ITEM, CART_TOGGLE_ALL
} from '@constants/cart'
import { API_CART, API_CART_NUM, API_CART_RECOMMEND } from '@constants/api'
import fetch from '@utils/request'

/**
 * 购物车信息
 * @param {*} payload
 */
export const dispatchCart = (payload) => {
  return (dispatch) => {
    return fetch({ url: API_CART, payload }).then((res) => {
      dispatch({
        type: CART_INFO,
        payload: res
      })
      return res
    })
  }
}

/**
 * 购物车物品数量
 * @param {*} payload
 */
export const dispatchCartNum = (payload) => {
  return (dispatch) => {
    return fetch({ url: API_CART_NUM, payload }).then((res) => {
      dispatch({
        type: CART_NUM,
        payload: res
      })
      return res
    })
  }
}

/**
 * 购物车推荐
 * @param {*} payload
 */
export const dispatchRecommend = (payload) => {
  return (dispatch) => {
    return fetch({ url: API_CART_RECOMMEND, payload }).then((res) => {
      dispatch({
        type: CART_RECOMMEND,
        payload: res
      })
      return res
    })
  }
}

export const dispatchAddItem = (payload) => ({
  type: CART_ADD_ITEM,
  payload
})

export const dispatchRemoveItem = (payload) => ({
  type: CART_REMOVE_ITEM,
  payload
})

export const dispatchUpdateItem = (payload) => ({
  type: CART_UPDATE_ITEM,
  payload
})

export const dispatchToggleItem = (payload) => ({
  type: CART_TOGGLE_ITEM,
  payload
})

export const dispatchToggleAll = (payload) => ({
  type: CART_TOGGLE_ALL,
  payload
})
