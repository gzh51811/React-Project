/**
 * Cart Reducer
 * 关于购物车的规则
 */

import {
  INIT_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHANGE_QTY,
  CLEAR_CART,
  CHANGE_CHECK
} from "../actions/cartAction";

// 初始状态
let initState = {
  goodslist: []
};

// state的修改逻辑
let reducer = (state = initState, { type, payload }) => {
  // state: 上一次的状态
  // action: 修改指令
  // 返回值：返回新的state
  switch (type) {
    //初始化商品
    case INIT_CART:
      return {
        ...state,
        goodslist: payload
      };
    // 添加商品到购物车
    case ADD_TO_CART:
      return {
        ...state,
        goodslist: [...state.goodslist, payload]
      };

    // 删除购物车商品
    case REMOVE_FROM_CART:
      return {
        ...state,
        goodslist: state.goodslist.filter(item => item._id !== payload.id)
      };

    // 修改购物车商品数量
    case CHANGE_QTY:
      return {
        ...state,
        goodslist: state.goodslist.map(goods => {
          if (goods._id === payload.id) {
            goods.qty = payload.qty;
          }
          return goods;
        })
      };

    // 清空购物车
    case CLEAR_CART:
      return {
        ...state,
        goodslist: []
      };
    //修改是否被选择
    case CHANGE_CHECK:
      return {
        ...state,
        goodslist: state.goodslist.map(goods => {
          if (goods._id === payload.id) {
            goods.check = !goods.check;
          }
          return goods;
        })
      };
    default:
      return state;
  }
};

export default reducer;
