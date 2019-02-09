import { combineReducers } from 'redux'
import counter from './counter'
import user from './user'

export default combineReducers({
  counter,
  user
})
