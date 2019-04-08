/**
 * Common Reducer
 * 关于全局的修改规则
 */
import {
  SHOW_MENUS,
  HIDE_MENUS,
  CHANGE_CURRENT,
  ROUTER_BACK
} from "../actions/commonReducer";

let initState = {
  show: true,
  current: "Home"
};
let reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ROUTER_BACK:
      payload.goBack(-1); //payload传过来的是history
      return state;
    case SHOW_MENUS:
      return {
        ...state,
        show: true
      };
    case HIDE_MENUS:
      return {
        ...state,
        show: false
      };
    case CHANGE_CURRENT:
      return {
        ...state,
        current: payload.current
      };
    default:
      return state;
  }
};

export default reducer;
