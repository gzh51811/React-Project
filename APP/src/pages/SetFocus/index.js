/* eslint-disable jsx-a11y/alt-text */
import React from "react";

// import "regenerator-runtime/runtime";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import commonReducer from "../../actions/commonReducer";
import userData from "../../actions/userData";
import withAxios from "../../hoc/withAxios";
import { Icon, Button } from "antd";

import "./setFocus.css";

//@withAxios
class setFocus extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentWillMount() {
    let { hideMenus } = this.props;
    hideMenus();
  }
  gotoBack() {
    // console.log("history", this.props.history);
    let { back } = this.props;
    back(this.props.history);
    // this.props.history.goBack();
  }
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    this.props.history.push("/login");
  }
  changePw() {
    this.props.history.push("/myuser/set/setpassw");
  }
  render() {
    let { user } = this.props;
    return (
      <div className="setFocus">
        <div className="setHeader">
          <p>
            <Icon
              onClick={this.gotoBack.bind(this)}
              style={{
                fontSize: "18px"
              }}
              type="left"
            />
            <span
              style={{
                margin: "auto"
              }}
            >
              设置中心
            </span>
          </p>
        </div>
        <div className="setMain">
          <div className="setlist">
            <p>头像</p>
            <div className="listright">
              <img src="https://activity.dapuimg.com/588742966342429755.png" />
              <Icon type="right" />
            </div>
          </div>
          <div className="setlist">
            <p>昵称</p>
            <div className="listright">
              <span>{user.username}</span>
              <Icon type="right" />
            </div>
          </div>
          <div className="setlist">
            <p>会员等级</p>
            <div className="listright">
              <Icon type="right" />
            </div>
          </div>
          <div
            className="setlist"
            style={{
              border: "none"
            }}
          >
            <p>个人基本信息</p>
            <div className="listright">
              <Icon type="right" />
            </div>
          </div>
          <div className="userM">账号绑定</div>
          <div className="setlist">
            <p>
              <Icon
                type="mobile"
                style={{
                  fontSize: "20px",
                  marginRight: "5px"
                }}
              />
              手机
            </p>
            <div className="listright">
              <span>183****9678</span>
              <Icon type="right" />
            </div>
          </div>
          <div className="setlist">
            <p>
              <Icon
                type="wechat"
                style={{
                  fontSize: "20px",
                  marginRight: "5px"
                }}
              />
              微信
            </p>
            <div className="listright">
              <span
                style={{
                  color: "red"
                }}
              >
                未绑定
              </span>
              <Icon type="right" />
            </div>
          </div>
          <div className="userM">账号安全</div>
          <div className="setlist" onClick={this.changePw.bind(this)}>
            <p>修改密码</p>
            <div className="listright">
              <Icon type="right" />
            </div>
          </div>
          <Button
            onClick={this.logout.bind(this)}
            type="primary"
            style={{
              width: "100%",
              height: "46px",
              background: "#DA5278",
              fontSize: "18px",
              marginTop: "20px"
            }}
          >
            退出登陆
          </Button>
        </div>
      </div>
    );
  }
}
setFocus = connect(
  state => ({}),
  dispatch => bindActionCreators(commonReducer, dispatch)
)(setFocus);
setFocus = connect(
  state => ({
    user: state.user.user
  }),
  dispatch => bindActionCreators(userData, dispatch)
)(setFocus);
// 高阶组件的应用
setFocus = withAxios(setFocus);

export default setFocus;
