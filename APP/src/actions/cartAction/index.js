/**
 * Action creator
 */

//  编写常量，用于规范type
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CHANGE_QTY = "CHANGE_QTY";
export const CLEAR_CART = "CLEAR_CART";
export const CHANGE_CHECK = "CHANGE_CHECK";
export const INIT_CART = "INIT_CART";
//初始化商品
export function initCart(goods) {
  return {
    type: INIT_CART,
    payload: goods
  };
}

//添加商品
export function add(goods) {
  return {
    type: ADD_TO_CART,
    payload: goods
  };
}
//移出一个商品
export function remove(id) {
  return {
    type: REMOVE_FROM_CART,
    payload: { id }
  };
}
//修改选项
export function changechek(id, check) {
  return {
    type: CHANGE_CHECK,
    payload: { id }
  };
}
//修改数量
export function changeqty(id, qty) {
  //   console.log("qty", qty);
  return {
    type: CHANGE_QTY,
    payload: { id, qty }
  };
}
//清楚全部
export function clear() {
  return {
    type: CLEAR_CART
  };
}

export default {
  initCart,
  add,
  remove,
  changeqty,
  clear,
  changechek
};
