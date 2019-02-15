import { CATE_MENU, CATE_SUB, CATE_SUB_LIST } from '@constants/cate'
import { API_CATE, API_CATE_SUB, API_CATE_SUB_LIST } from '@constants/api'
import fetch from '@utils/request'

/**
 * 分类菜单、列表
 * @param {*} payload
 */
export const dispatchMenu = (payload) => {
  return (dispatch) => {
    return fetch({ url: API_CATE, payload }).then((res) => {
      dispatch({
        type: CATE_MENU,
        payload: res
      })
      return res
    })
  }
}

/**
 * 子级菜单
 * @param {*} payload
 */
export const dispatchSubMenu = (payload) => {
  return (dispatch) => {
    return fetch({ url: API_CATE_SUB, payload }).then((res) => {
      dispatch({
        type: CATE_SUB,
        payload: res
      })
      return res
    })
  }
}

/**
 * 子级列表
 * @param {*} payload
 */
export const dispatchSubList = (payload) => {
  return (dispatch) => {
    return fetch({ url: API_CATE_SUB_LIST, payload }).then((res) => {
      dispatch({
        type: CATE_SUB_LIST,
        payload: { ...res, id: payload.categoryL2Id }
      })
      return res
    })
  }
}
