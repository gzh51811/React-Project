import React, { Component } from "react";

import { Menu, Icon, Badge } from "antd";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
// 引入connect高阶组件
import { connect } from "react-redux";
//引入以导航菜单分类的大组件
import Home from "./pages/Home";
import List from "./pages/List";
// import Goods from "./pages/Goods";
import Cart from "./pages/Cart";
import MyUser from "./pages/MyUser";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SetFocus from "./pages/SetFocus";
//引入组件个人样式
import "./App.css";

class App extends Component {
  constructor() {
    super();
    // console.log("current", this.props.current);
    this.state = {
      navs: [
        {
          text: "首页",
          name: "Home",
          path: "/home",
          icon: "home"
        },
        {
          text: "分类",
          name: "List",
          path: "/list",
          icon: "bars"
        },
        {
          text: "购物车",
          name: "Cart",
          path: "/cart",
          icon: "shopping-cart"
        },
        {
          text: "我的",
          name: "MyUser",
          path: "/myuser",
          icon: "user"
        }
      ]
      // current: "Home"
    };
  }
  handleClick = e => {
    // console.log(this, e);
    this.setState(
      {
        current: e.key
      },
      () => {
        //路由跳转：编程式导航
        // 利用withRouter()高阶组件实现history的传递
        this.props.history.push("/" + e.key.toLowerCase());
      }
    );
  };
  render() {
    let { cartlen, comon, cur } = this.props;
    return (
      <div className="App">
        {comon ? (
          <Menu
            //   className="menu"
            onClick={this.handleClick}
            selectedKeys={[cur]}
            mode="horizontal"
            className="NavMenu"
          >
            {this.state.navs.map(item => (
              <Menu.Item className="NavMenuItem" key={item.name}>
                {item.name === "Cart" ? (
                  <Badge count={cartlen}>
                    <Icon className="NavMenuIcon" type={item.icon} />
                    <span className="NavMenuItemText">{item.text}</span>
                  </Badge>
                ) : (
                  <>
                    <Icon className="NavMenuIcon" type={item.icon} />
                    <span className="NavMenuItemText">{item.text}</span>
                  </>
                )}
              </Menu.Item>
            ))}
          </Menu>
        ) : (
          ""
        )}
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/list" component={List} />
          <Route path="/myuser" component={MyUser} exact />
          <Route path="/myuser/set" component={SetFocus} exact />
          <Route path="/login" component={Login} />
          <Route path="/cart" component={Cart} />
          <Route path="/reg" component={Register} />
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    );
  }
}

App = withRouter(App);

//把仓库store里的数据,方法挂在实例上
const mapStateToProps = state => {
  return {
    cartlen: state.cart.goodslist.length,
    comon: state.comon.show,
    cur: state.comon.current
  };
};
App = connect(mapStateToProps)(App);

export default App;
