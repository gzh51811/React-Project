/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import commonReducer from "../../actions/commonReducer";

import { Form, Icon, Input, Button, Checkbox } from "antd";

import withAxios from "../../hoc/withAxios";

import "./register.css";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      checkNumber: ""
    };
  }
  componentWillMount() {
    let { hideMenus } = this.props;
    hideMenus();
  }
  gotoLogin() {
    this.props.history.push("/login");
  }
  getCheck() {
    let number = "";
    for (let i = 0; i < 4; i++) {
      number += parseInt(Math.random() * 10);
    }
    alert("验证码" + number);
    this.setState({
      checkNumber: number
    });
  }
  toregister() {
    // console.log("props", this.props);
    let { axios } = this.props;
    let uname = this.refs.username.state.value;
    let checkN = this.refs.checkN.state.value;
    let pword = this.refs.password.state.value;
    if (uname && checkN && pword) {
      if (checkN == this.state.checkNumber) {
        axios
          .post("http://47.102.102.242:1014/setting/findUser", {
            username: uname
          })
          .then(res => {
            if (res.data.length != 1) {
              axios
                .post("http://47.102.102.242:1014/setting/insertUsers", {
                  username: uname,
                  password: pword
                })
                .then(res => {
                  if (res.data.result.ok) {
                    this.gotoLogin();
                  }
                });
            }
          });
        //
      }
    }
  }
  render() {
    return (
      <div className="register">
        <img
          className="loginimg"
          src="http://activity.dapuimg.com/m_login_newbg.png"
        />
        <div className="registermain">
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
                  placeholder="手机号"
                />
              }
            </Form.Item>
            <Form.Item style={{ position: "relative" }}>
              {
                <Input
                  ref="checkN"
                  prefix={
                    <Icon
                      type="diff"
                      style={{ fontSize: "18px", color: "rgba(0,0,0,.25)" }}
                    />
                  }
                  placeholder="验证码"
                />
              }
              <Button
                type="primary"
                onClick={this.getCheck.bind(this)}
                className="login-form-button checkBtn"
              >
                获取验证码
              </Button>
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
                  placeholder="密码"
                />
              }
            </Form.Item>
            <Form.Item>
              {/* <span className="login-form-forgot">忘记密码</span> */}
              <Button
                type="primary"
                onClick={this.toregister.bind(this)}
                className="login-form-button loginBtn"
              >
                发现居家好物
              </Button>
              <div className="Regother">
                <Checkbox
                  checked
                  style={{
                    color: "#666"
                  }}
                >
                  同意<a href="javascript:;">《大朴用户协议》</a>
                </Checkbox>
                <span onClick={this.gotoLogin.bind(this)}>登陆</span>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
Register = connect(
  state => ({}),
  dispatch => bindActionCreators(commonReducer, dispatch)
)(Register);
Register = withAxios(Register);
export default Register;
