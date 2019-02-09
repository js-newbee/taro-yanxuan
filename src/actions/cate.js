import {
  CATE_MENU,
  CATE_LIST
} from '@constants/cate'
import fetch from '@utils/request'

export const dispatchMenu = (payload) => {
  return (dispatch) => {
    return fetch({ url: '/cate/menu', payload }).then((res) => {
      dispatch({
        type: CATE_MENU,
        payload: res.data
      })
      return res
    })
  }
}

export const dispatchList = (payload) => {
  return (dispatch) => {
    return fetch({ url: '/cate/list', payload }).then((res) => {
      dispatch({
        type: CATE_LIST,
        payload: res.data
      })
      return res
    })
  }
}
