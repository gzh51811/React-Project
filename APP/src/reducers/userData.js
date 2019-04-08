/**
 * Common Reducer
 * 关于全局的修改规则
 */
import { CHANGE_USER } from "../actions/userData";

let initState = {
  user: {
    username: ""
  }
};
let reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case CHANGE_USER:
      return {
        ...state,
        user: {
          username: payload.username
        }
      };
    default:
      return state;
  }
};

export default reducer;
