import { combineReducers } from 'redux'
import counter from './counter'
import cate from './cate'
import cart from './cart'
import user from './user'

export default combineReducers({
  counter,
  cate,
  cart,
  user,
})
