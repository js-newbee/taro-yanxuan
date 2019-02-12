import {
  CART_RECOMMEND,
  CART_ADD_ITEM, CART_REMOVE_ITEM, CART_UPDATE_ITEM,
  CART_TOGGLE_ITEM, CART_TOGGLE_ALL
} from '@constants/cart'

const INITIAL_STATE = {
  recommend: [],
  // item: { id, selected, num ... }
  list: []
}

export default function cart(state = INITIAL_STATE, action) {
  switch(action.type) {
    case CART_RECOMMEND: {
      return {
        ...state,
        recommend: action.payload.list
      }
    }
    case CART_ADD_ITEM: {
      const list = state.list.slice()
      const index = list.findIndex(item => item.id === action.payload.id)
      if (index === -1) {
        list.push(action.payload)
      } else {
        list[index] = { ...list[index], num: list[index] + 1 }
      }
      return { ...state, list }
    }
    case CART_REMOVE_ITEM: {
      const list = state.list.slice()
      const index = list.findIndex(item => item.id === action.payload.id)
      if (index !== -1) {
        list.splice(index, 1)
      }
      return { ...state, list }
    }
    case CART_UPDATE_ITEM: {
      const list = state.list.slice()
      const index = list.findIndex(item => item.id === action.payload.id)
      if (index !== -1) {
        list[index] = { ...list[index], ...action.payload }
      }
      return { ...state, list }
    }
    case CART_TOGGLE_ITEM: {
      const list = state.list.slice()
      const index = list.findIndex(item => item.id === action.payload.id)
      if (index !== -1) {
        list[index] = { ...list[index], selected: !list[index].selected }
      }
      return { ...state, list }
    }
    case CART_TOGGLE_ALL: {
      const selected = !state.list.every(item => item.selected)
      const list = state.list.map((item) => ({
        ...item, selected
      }))
      return { ...state, list }
    }
    default:
      return state
  }
}
