import { USER_LOGIN, USER_LOGOUT } from '@constants/user'
import { API_USER, API_USER_LOGIN } from '@constants/api'
import fetch from '@utils/request'

/**
 * 获取用户信息
 * @param {*} payload
 */
export const dispatchUser = (payload) => {
  return (dispatch) => {
    return fetch({
      url: API_USER,
      payload,
      showToast: false,
      autoLogin: false
    }).then((res) => {
      dispatch({
        type: USER_LOGIN,
        payload: res
      })
      return res
    })
  }
}

/**
 * 用户登录
 * @param {*} payload
 */
export const dispatchLogin = (payload) => {
  return (dispatch) => {
    return fetch({ url: API_USER_LOGIN, payload }).then((res) => {
      dispatch({
        type: USER_LOGIN,
        payload: res
      })
      return res
    })
  }
}

/**
 * 用户退出登录
 */
export const dispatchLogout = () => {
  return {
    type: USER_LOGOUT
  }
}
