import { combineReducers } from 'redux'
import counter from './counter'
import cate from './cate'
import user from './user'

export default combineReducers({
  counter,
  cate,
  user,
})
