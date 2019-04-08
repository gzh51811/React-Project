import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import commonReducer from "./commonReducer";
import userData from "./userData";
//合并Reducer
const rootReducers = combineReducers({
  comon: commonReducer,
  cart: cartReducer,
  user: userData
});

export default rootReducers;
