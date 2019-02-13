import { combineReducers } from 'redux'
import cate from './cate'
import cart from './cart'
import home from './home'
import user from './user'

export default combineReducers({
  home,
  cate,
  cart,
  user,
})
