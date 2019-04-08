import React from "react";
// import Header from '../CommonComponents/Header';
import "./index.css";
import { Input, Icon } from "antd";

//组件
import Topic from "./topic";
import Commend from "./commend";

//挂载store全局函数
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import commonAction from "../../actions/commonAction";
//挂载history
import { withRouter } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    // const { keyword } = this.state;
    let { history, goSearch } = this.props;
    return (
      <div className="home">
        {/*<Header>首页</Header>*/}
        <div className="homeBox">
          <img
            alt="logo"
            className="homeLogo"
            src="https://activity.dapuimg.com/2018091102.png"
          />
          <Input
            className="homeSearch"
            placeholder="发现居家好物"
            prefix={<Icon type="search" style={{ color: "rgba(0,0,0,.25)" }} />}
            onClick={goSearch.bind("", history)}
          />
        </div>
        <div>
          <h3 style={{ fontWeight: 600, margin: "15px 0" }}>
            创建放心消费环境，树立诚信守法意识。
          </h3>
        </div>

        {/*推荐商品*/}
        <div style={{ background: "#f0f0f0" }}>
          <h3 style={{ fontWeight: 600, margin: 0, padding: "6px 0" }}>
            热门推销
          </h3>
        </div>
        <div>
          <h6 style={{ margin: "7px 0" }}>用户喜爱的热销精品</h6>
          <Commend />
        </div>

        {/*精选话题*/}
        <div style={{ background: "#f0f0f0" }}>
          <h3 style={{ fontWeight: 600, margin: 0, padding: "6px 0" }}>
            精选话题
          </h3>
        </div>
        <div className="topicBox">
          <Topic />
        </div>
      </div>
    );
  }
}

Home = withRouter(Home);

Home = connect(
  state => {
    return {};
  },
  dispatch => bindActionCreators(commonAction, dispatch)
)(Home);

export default Home;
