/* eslint-disable no-undef */
//引入saga里的方法
import { put, takeLatest, all } from "redux-saga/effects";

import { getCart } from "../service";

//let delay = (time)=>new Promise(resolve=>setTimeout(resolve,time));

function* initCart(action) {
  // console.log("添加购物车");
  try {
    console.log("移出成功");
    // let goods = yield call(
    //   getCart,
    //   "http://47.102.102.242:1014/setting/findCart",
    //   { username: "laoxie" }
    // );
    // console.log("goods", goods);
    // yield put({ type: "ADD_TO_CART", payload: goods }); //等效小dispatch({type})
  } catch (err) {
    yield put({ type: "ADD_TO_CART_FAIL" });
  }

  // // 获取state
  // let state = select();//等效于store.getState()
}

// 监听action,
function* watchInitCar() {
  yield takeLatest("REMOVE_FROM_CART", initCart);
}

export default function* rooSaga() {
  yield all([watchInitCar()]);
}
