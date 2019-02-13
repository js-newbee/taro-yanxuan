import {
  HOME_INFO, HOME_RECOMMEND
} from '@constants/home'
import fetch from '@utils/request'

export const dispatchInfo = (payload) => {
  return (dispatch) => {
    return fetch({ url: '/home/info', payload }).then((res) => {
      dispatch({
        type: HOME_INFO,
        payload: res.data
      })
      return res
    })
  }
}

export const dispatchRecommend = (payload) => {
  return (dispatch) => {
    return fetch({ url: '/cate/recommend', payload }).then((res) => {
      dispatch({
        type: HOME_RECOMMEND,
        payload: res.data
      })
      return res
    })
  }
}
