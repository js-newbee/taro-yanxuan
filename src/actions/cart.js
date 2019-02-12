import {
  CART_RECOMMEND,
  CART_ADD_ITEM, CART_REMOVE_ITEM, CART_UPDATE_ITEM,
  CART_TOGGLE_ITEM, CART_TOGGLE_ALL
} from '@constants/cart'
import fetch from '@utils/request'

export const dispatchRecommend = (payload) => {
  return (dispatch) => {
    return fetch({ url: '/cart/recommend', payload }).then((res) => {
      dispatch({
        type: CART_RECOMMEND,
        payload: res.data
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
