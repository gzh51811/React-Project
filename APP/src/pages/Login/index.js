/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import commonReducer from "../../actions/commonReducer";

import { Form, Icon, Input, Button } from "antd";

import withAxios from "../../hoc/withAxios";

import "./login.css";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentWillMount() {
    let { hideMenus } = this.props;
    hideMenus();
  }
  gotoReg() {
    this.props.history.push("/reg");
  }
  login() {
    let { axios } = this.props;
    let uname = this.refs.username.state.value;
    let pword = this.refs.password.state.value;
    if (uname && pword) {
      axios
        .post("http://47.102.102.242:1014/users/login", {
          username: uname,
          password: pword
        })
        .then(res => {
          if (res.data.status === "success") {
            console.log("success", res.data);
            localStorage.setItem("username", uname);
            localStorage.setItem("token", res.data.token);
            this.props.history.push("/myuser");
          } else {
            alert("密码错误");
          }
        });
    }
  }
  render() {
    return (
      <div className="login">
        <img
          className="loginimg"
          src="http://activity.dapuimg.com/m_login_newbg.png"
        />
        <div className="loginmain">
          <Form className="login-form">
            <Form.Item>
              {
                <Input
                  ref="username"
                  prefix={
                    <Icon
                      type="user"
                      style={{ fontSize: "18px", color: "rgba(0,0,0,.25)" }}
                    />
                  }
                  placeholder="手机号/邮箱/用户名"
                />
              }
            </Form.Item>
            <Form.Item>
              {
                <Input
                  ref="password"
                  prefix={
                    <Icon
                      type="lock"
                      style={{
                        fontSize: "18px",
                        color: "rgba(0,0,0,.25)"
                      }}
                    />
                  }
                  type="password"
                  placeholder="Password"
                />
              }
            </Form.Item>
            <Form.Item>
              {/* <span className="login-form-forgot">忘记密码</span> */}
              <Button
                type="primary"
                onClick={this.login.bind(this)}
                className="login-form-button loginBtn"
              >
                发现居家好物
              </Button>
              <div className="Loginother">
                <span onClick={this.gotoReg.bind(this)}>注册</span>
                <span>忘记密码</span>
              </div>
              <div>
                <img
                  style={{
                    width: "60px",
                    height: "60px"
                  }}
                  src="http://activity.dapuimg.com/m_login_webchat_new.png"
                />
                <p
                  style={{
                    marginTop: "5px",
                    color: "#fff",
                    fontSize: "14px"
                  }}
                >
                  微信登陆
                </p>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
Login = connect(
  state => ({}),
  dispatch => bindActionCreators(commonReducer, dispatch)
)(Login);
Login = withAxios(Login);
export default Login;
