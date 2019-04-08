/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

import { List, InputNumber, Icon, Row, Col, Button } from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import withAxios from "../../hoc/withAxios";

import cartAction from "../../actions/cartAction";
import commonReducer from "../../actions/commonReducer";

import "./Cart.css";

class Cart extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentWillMount() {
    let { showMenus, changecurrent, axios, initCart } = this.props;
    showMenus();
    changecurrent("Cart");

    let username = localStorage.getItem("username");
    if (username) {
      axios
        .post("http://47.102.102.242:1014/setting/findCart", {
          username: username
        })
        .then(res => {
          // console.log("res", res.data);
          initCart(res.data);
        });
    }
  }
  addNum(id, qty) {
    // let { changeqty } = this.props;
    let num = qty * 1 + 1;
    // changeqty(id, qty * 1 + 1);
    this.changeNum(id, num);
  }
  minusNum(id, qty) {
    // let { changeqty } = this.props;
    let num = qty - 1 >= 1 ? qty - 1 : 1;
    // changeqty(id, num);
    this.changeNum(id, num);
  }
  changeNum(id, qty) {
    let { axios, changeqty } = this.props;
    // console.log("props", this.props);
    axios
      .post("http://47.102.102.242:1014/setting/updateCart", {
        _id: id,
        qty
      })
      .then(res => {
        // console.log("res", res);
      });
    changeqty(id, qty);
  }
  changeCheck(id) {
    let { changechek } = this.props;
    changechek(id);
  }
  removeGoods(id) {
    let { remove, axios } = this.props;
    remove(id);
    axios.post("http://47.102.102.242:1014/setting/del", {
      _id: id,
      collection: "cart"
    });
  }
  render() {
    let { goodslist, total } = this.props;

    return (
      <div className="Cart" style={{ padding: "15px" }}>
        <div className="main">
          {/* 购物车主体 */}
          <div className="cartMain">
            <List
              itemLayout="horizontal"
              style={{
                marginBottom: "30px"
              }}
            >
              {goodslist.length > 0 ? (
                goodslist.map(goods => {
                  return (
                    <List.Item key={goods._id} actions={[]}>
                      <List.Item.Meta
                        avatar={
                          <div
                            style={{
                              width: "170px",
                              display: "flex"
                            }}
                          >
                            <div>
                              {goods.check ? (
                                <Icon
                                  className="checkIcon"
                                  type="check-circle"
                                  onClick={this.changeCheck.bind(
                                    this,
                                    goods._id
                                  )}
                                  style={{
                                    background: "#f00000"
                                  }}
                                />
                              ) : (
                                <Icon
                                  className="checkIcon"
                                  type="check-circle"
                                  onClick={this.changeCheck.bind(
                                    this,
                                    goods._id
                                  )}
                                  style={{
                                    background: "#fff"
                                  }}
                                />
                              )}
                            </div>
                            <img
                              src={goods.url}
                              style={{
                                width: "110px",
                                height: "72px",
                                padding: "0 15px",
                                float: "right"
                              }}
                            />
                          </div>
                        }
                        description={
                          <div>
                            <p
                              style={{
                                color: "#333",
                                fontSize: "14px",
                                marginBottom: "10px",
                                textAlign: "left"
                              }}
                            >
                              {goods.name}
                            </p>
                            <p
                              className="price"
                              style={{
                                color: "#333",
                                fontSize: "14px",
                                marginBottom: "10px",
                                textAlign: "left"
                              }}
                            >
                              单价：￥
                              <span>{goods.price}</span>
                            </p>
                            <div
                              style={{
                                textAlign: "left",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between"
                              }}
                            >
                              <div>
                                <span
                                  className="changeNum"
                                  onClick={this.minusNum.bind(
                                    this,
                                    goods._id,
                                    goods.qty
                                  )}
                                >
                                  -
                                </span>
                                <InputNumber
                                  style={{
                                    width: "65px",
                                    height: "34px"
                                  }}
                                  min={1}
                                  value={goods.qty}
                                  onChange={this.changeNum.bind(
                                    this,
                                    goods._id,
                                    goods.qty
                                  )}
                                />
                                <span
                                  className="changeNum"
                                  onClick={this.addNum.bind(
                                    this,
                                    goods._id,
                                    goods.qty
                                  )}
                                >
                                  +
                                </span>
                              </div>
                              <Icon
                                type="delete"
                                style={{ float: "right" }}
                                onClick={this.removeGoods.bind(this, goods._id)}
                              />
                            </div>
                          </div>
                        }
                      />
                    </List.Item>
                  );
                })
              ) : (
                <div className="container">
                  <div className="cart-empty" />
                  <p
                    style={{
                      lineHeight: "60px",
                      fontSize: "13px"
                    }}
                  >
                    购物车空空的
                  </p>
                  <Button type="primary" className="buybuybuy">
                    买买买
                  </Button>
                </div>
              )}
            </List>
            <div
              style={{
                textAlign: "left",
                marginBottom: "15px",
                background: "#fff"
              }}
            >
              <p
                style={{
                  color: "#333",
                  fontSize: "18px",
                  marginBottom: "10px",
                  fontWeight: "bold"
                }}
              >
                已享受的促销优惠：
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "#ff0000",
                  marginBottom: "10px"
                }}
              >
                购物满88元包邮
              </p>
            </div>
          </div>
          {/* 猜你喜欢 */}
          <div className="guess">
            <div>
              <h4
                style={{
                  marginBottom: "10px"
                }}
              >
                猜你喜欢
              </h4>
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  overflow: "hidden"
                }}
              >
                <ul className="guessUl">
                  <li>
                    <img
                      src="https://p2.dapuimg.com/public/images/4c/3e/eb/60d91b71ef02fa169f8f93cd462b5549.jpg?1545287755#h"
                      style={{ width: "160px", height: "160px" }}
                    />
                    <p className="p-name">阿瓦提毛巾两条装</p>
                    <p className="p-price">￥ 66.0</p>
                  </li>
                  <li>
                    <img
                      src="https://p2.dapuimg.com/public/images/4c/3e/eb/60d91b71ef02fa169f8f93cd462b5549.jpg?1545287755#h"
                      style={{ width: "160px", height: "160px" }}
                    />
                    <p className="p-name">阿瓦提毛巾两条装</p>
                    <p className="p-price">￥ 66.0</p>
                  </li>
                  <li>
                    <img
                      src="https://p2.dapuimg.com/public/images/4c/3e/eb/60d91b71ef02fa169f8f93cd462b5549.jpg?1545287755#h"
                      style={{ width: "160px", height: "160px" }}
                    />
                    <p className="p-name">阿瓦提毛巾两条装</p>
                    <p className="p-price">￥ 66.0</p>
                  </li>
                  <li>
                    <img
                      src="https://p2.dapuimg.com/public/images/4c/3e/eb/60d91b71ef02fa169f8f93cd462b5549.jpg?1545287755#h"
                      style={{ width: "160px", height: "160px" }}
                    />
                    <p className="p-name">阿瓦提毛巾两条装</p>
                    <p className="p-price">￥ 66.0</p>
                  </li>
                  <li>
                    <img
                      src="https://p2.dapuimg.com/public/images/4c/3e/eb/60d91b71ef02fa169f8f93cd462b5549.jpg?1545287755#h"
                      style={{ width: "160px", height: "160px" }}
                    />
                    <p className="p-name">阿瓦提毛巾两条装</p>
                    <p className="p-price">￥ 66.0</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <Row
            gutter={10}
            type="flex"
            align="middle"
            justify="center"
            className="payRow"
          >
            <Col span={12} style={{ color: "#d9534f", fontSize: "16px" }}>
              金额： ￥{total}
            </Col>
            <Col span={12}>
              <Col span={12} className="PayButton">
                送心意
              </Col>
              <Col span={12} className="PayButton">
                去结算
              </Col>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

Cart = connect(
  state => ({
    goodslist: state.cart.goodslist,
    total: state.cart.goodslist.reduce((prev, current) => {
      if (current.check) {
        return prev + current.price * current.qty;
      } else {
        return prev;
      }
    }, 0)
  }),
  dispatch => bindActionCreators(cartAction, dispatch)
)(Cart);
Cart = connect(
  state => ({}),
  dispatch => bindActionCreators(commonReducer, dispatch)
)(Cart);
Cart = withAxios(Cart);
export default Cart;
