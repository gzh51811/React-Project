/* eslint-disable jsx-a11y/alt-text */
import React from "react";

// import "regenerator-runtime/runtime";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import commonReducer from "../../actions/commonReducer";
import userData from "../../actions/userData";
import withAxios from "../../hoc/withAxios";

import { Row, Col, List, Icon } from "antd";

import "./myuser.css";

//@withAxios
class MyUser extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          title: "我的订单",
          icon: "menu-unfold"
        },
        {
          title: "我的评论",
          icon: "message"
        },
        {
          title: "我的消息",
          icon: "bell"
        },
        {
          title: "我的积分",
          icon: "wallet"
        },
        {
          title: "我的优惠券",
          icon: "red-envelope"
        },
        {
          title: "我的礼品单",
          icon: "gift"
        },
        {
          title: "我的地址",
          icon: "home"
        },
        {
          title: "关于大朴",
          icon: "twitter"
        },
        {
          title: "在线客服",
          icon: "phone"
        }
      ]
    };
  }
  componentWillMount() {
    // console.log("props", this.props);
    let { showMenus, changecurrent, axios, changeuser } = this.props;
    showMenus();
    changecurrent("MyUser");
    let token = localStorage.getItem("token");
    if (token) {
      axios
        .post("http://47.102.102.242:1014/users/autoLogin", {
          token
        })
        .then(res => {
          if (res.data == "success") {
            let username = localStorage.getItem("username");
            changeuser(username);
          } else {
            this.props.history.push("/login");
          }
        });
    } else {
      this.props.history.push("/login");
    }
  }
  gotoSet() {
    this.props.history.push("/myuser/set");
  }
  render() {
    let { user } = this.props;
    return (
      <div className="myuser">
        <div className="myuserMain">
          <div className="uerHeader">
            <div className="m-img">
              <img
                onClick={this.gotoSet.bind(this)}
                src="https://activity.dapuimg.com/588742966342429755.png"
              />
            </div>
            <div className="m-name">
              <p>{user.username}</p>
              <p>会员等级：新用户</p>
              <p>累计消费：0</p>
              <p>完善信息奖励500积分</p>
            </div>
          </div>
          <div className="userpay">
            <Row className="userRow" gutter={8}>
              <Col span={6}>
                <p className="ostatus">0</p>
                <p>待付款</p>
              </Col>
              <Col span={6}>
                <p className="ostatus">0</p>
                <p>待发货</p>
              </Col>
              <Col span={6}>
                <p className="ostatus">0</p>
                <p>待收货</p>
              </Col>
              <Col span={6}>
                <p className="ostatus">0</p>
                <p>待评价</p>
              </Col>
            </Row>
          </div>
          <div className="usermain">
            <List
              className="userList"
              itemLayout="horizontal"
              dataSource={this.state.data}
              renderItem={item => (
                <List.Item>
                  <Icon
                    style={{
                      fontSize: "18px"
                    }}
                    type={item.icon}
                  />
                  <List.Item.Meta className="userItem" title={item.title} />
                </List.Item>
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}
MyUser = connect(
  state => ({}),
  dispatch => bindActionCreators(commonReducer, dispatch)
)(MyUser);
MyUser = connect(
  state => ({
    user: state.user.user
  }),
  dispatch => bindActionCreators(userData, dispatch)
)(MyUser);
// 高阶组件的应用
MyUser = withAxios(MyUser);

export default MyUser;
