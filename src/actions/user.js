import {
  USER_LOGIN,
  USER_LOGOUT
} from '../constants/user'

export const dispatchLogin = (payload) => {
  return dispatch => {
    dispatch({
      type: USER_LOGIN,
      payload
    })
    return Promise.resolve()
  }
}

export const dispatchLogout = () => {
  return {
    type: USER_LOGOUT
  }
}
