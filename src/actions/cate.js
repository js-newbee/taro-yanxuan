import { CATE_MENU, CATE_LIST } from '@constants/cate'
import { API_CATE } from '@constants/api'
import fetch from '@utils/request'

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

export const dispatchList = (payload) => {
  return (dispatch) => {
    return fetch({ url: '', payload }).then((res) => {
      dispatch({
        type: CATE_LIST,
        payload: res.data
      })
      return res
    })
  }
}
