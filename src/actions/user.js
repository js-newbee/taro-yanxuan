import {
  USER_LOGIN,
  USER_LOGOUT
} from '@constants/user'
import fetch from '@utils/request'

export const dispatchLogin = (payload) => {
  return (dispatch) => {
    fetch({ url: '/user/login', payload }).then((res) => {
      dispatch({
        type: USER_LOGIN,
        payload: res.data
      })
    })
    return Promise.resolve()
  }
}

export const dispatchLogout = () => {
  return {
    type: USER_LOGOUT
  }
}
