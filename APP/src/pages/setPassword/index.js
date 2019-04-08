/* eslint-disable jsx-a11y/alt-text */
import React from "react";

// import "regenerator-runtime/runtime";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import commonReducer from "../../actions/commonReducer";
import userData from "../../actions/userData";
import withAxios from "../../hoc/withAxios";
import { Icon, Button, Input } from "antd";

import "./setPassword.css";

//@withAxios
class setPassword extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentWillMount() {
    let { hideMenus } = this.props;
    hideMenus();
  }
  gotoBack() {
    let { back } = this.props;
    back(this.props.history);
  }
  changePw() {
    var pw = this.refs.pw.state.value.trim();
    var pwagain = this.refs.pwagain.state.value.trim();
    if (pw && pwagain) {
      if (pw == pwagain) {
        let username = localStorage.getItem("username");
        let { axios } = this.props;
        axios
          .post("http://47.102.102.242:1014/setting/updateUsers", {
            username,
            password: pw
          })
          .then(res => {
            if (res.data.ok) {
              alert("密码修改成功");
              this.props.history.push("/login");
            }
          });
      }
    }
  }
  render() {
    return (
      <div className="setPassw">
        <div className="psHeader">
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
              设置密码
            </span>
          </p>
        </div>
        <div className="setMain">
          <div className="form-group">
            <label htmlFor="passw">新密码</label>
            <Input
              ref="pw"
              id="passw"
              type="password"
              placeholder="请输入新密码"
            />
          </div>
          <div className="form-group">
            <label htmlFor="passw">再次输入</label>
            <Input
              ref="pwagain"
              id="passw"
              type="password"
              placeholder="请再次输入新密码"
            />
          </div>
          <Button
            type="primary"
            onClick={this.changePw.bind(this)}
            style={{
              width: "100%",
              height: "46px",
              background: "#DA5278",
              fontSize: "18px",
              marginTop: "20px"
            }}
          >
            提交
          </Button>
        </div>
      </div>
    );
  }
}
setPassword = connect(
  state => ({}),
  dispatch => bindActionCreators(commonReducer, dispatch)
)(setPassword);
setPassword = connect(
  state => ({
    user: state.user.user
  }),
  dispatch => bindActionCreators(userData, dispatch)
)(setPassword);
// 高阶组件的应用
setPassword = withAxios(setPassword);

export default setPassword;
