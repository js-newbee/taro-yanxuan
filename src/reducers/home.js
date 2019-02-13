import {
  HOME_INFO, HOME_RECOMMEND
} from '@constants/home'

const INITIAL_STATE = {
  banner: [],
  recommend: []
}

export default function home(state = INITIAL_STATE, action) {
  switch(action.type) {
    case HOME_INFO: {
      return {
        ...state,
        banner: action.payload.banner
      }
    }
    case HOME_RECOMMEND: {
      return {
        ...state,
        recommend: action.payload.list
      }
    }
    default:
      return state
  }
}
