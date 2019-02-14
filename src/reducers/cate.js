import { CATE_MENU, CATE_LIST } from '@constants/cate'

const INITIAL_STATE = {
  menu: [],
  category: []
}

export default function cate(state = INITIAL_STATE, action) {
  switch(action.type) {
    case CATE_MENU: {
      const { categoryList } = action.payload
      const menu = categoryList.map(item => ({
        id: item.id,
        name: item.name
      }))
      return { ...state, menu, category: categoryList }
    }
    case CATE_LIST: {
      return {
        ...state
      }
    }
    default:
      return state
  }
}
