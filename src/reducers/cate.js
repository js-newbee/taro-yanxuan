import {
  CATE_MENU, CATE_LIST
} from '@constants/cate'

const INITIAL_STATE = {
  menu: [],
  banner: {},
  list: []
}

export default function cate(state = INITIAL_STATE, action) {
  switch(action.type) {
    case CATE_MENU: {
      return {
        ...state,
        menu: action.payload.list
      }
    }
    case CATE_LIST: {
      return {
        ...state,
        banner: action.payload.banner,
        list: action.payload.list
      }
    }
    default:
      return state
  }
}
