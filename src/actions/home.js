import {
  HOME_INFO, HOME_SEARCH_COUNT, HOME_RECOMMEND, HOME_PIN
} from '@constants/home'
import {
  API_HOME, API_HOME_SEARCH_COUNT, API_HOME_RECOMMEND, API_HOME_PIN
} from '@constants/api'
import fetch from '@utils/request'

/**
 * 首页数据
 * @param {*} payload
 */
export const dispatchHome = (payload) => {
  return (dispatch) => {
    return fetch({ url: API_HOME, payload }).then((res) => {
      dispatch({
        type: HOME_INFO,
        payload: res
      })
      return res
    })
  }
}

/**
 * 商品总数
 * @param {*} payload
 */
export const dispatchSearchCount = (payload) => {
  return (dispatch) => {
    return fetch({ url: API_HOME_SEARCH_COUNT, payload }).then((res) => {
      dispatch({
        type: HOME_SEARCH_COUNT,
        payload: res
      })
      return res
    })
  }
}

/**
 * 拼团
 * @param {*} payload
 */
export const dispatchPin = (payload) => {
  return (dispatch) => {
    return fetch({ url: API_HOME_PIN, payload }).then((res) => {
      dispatch({
        type: HOME_PIN,
        payload: res
      })
      return res
    })
  }
}

export const dispatchRecommend = (payload) => {
  return (dispatch) => {
    return fetch({ url: API_HOME_RECOMMEND, payload }).then((res) => {
      dispatch({
        type: HOME_RECOMMEND,
        payload: res
      })
      return res
    })
  }
}
