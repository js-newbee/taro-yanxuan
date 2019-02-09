import {
  USER_LOGIN, USER_LOGOUT
} from '../constants/user'

const INITIAL_STATE = {
  userInfo: {}
}

export default function user(state = INITIAL_STATE, action) {
  switch(action.type) {
    case USER_LOGIN: {
      return {
        ...state,
        userInfo: MOCK_DATA[USER_LOGIN]
      }
    }
    case USER_LOGOUT: {
      return {
        ...INITIAL_STATE
      }
    }
    default:
      return state
  }
}

const MOCK_DATA = {
  USER_LOGIN: {
    id: 1,
    name: 'jsNewbee',
    avatar: require('./assets/avatar.png'),
    type: '微信用户'
  }
}
