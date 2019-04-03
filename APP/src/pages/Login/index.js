/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import commonReducer from "../../actions/commonReducer";

import { Form, Icon, Input, Button } from "antd";

// import withAxios from "../../hoc/withAxios";

import "./login.css";

class Login extends React.Component {
  componentWillMount() {
    let { hideMenus } = this.props;
    hideMenus();
  }
  gotoReg() {
    this.props.history.push("/reg");
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
              <Button type="primary" className="login-form-button loginBtn">
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
export default Login;
