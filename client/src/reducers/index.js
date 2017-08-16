
import { combineReducers } from "redux"

import polls from "./pollReducer";
import user from './userReducer';


export default combineReducers({
  polls,
  user
})