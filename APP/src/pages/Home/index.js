import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import commonReducer from "../../actions/commonReducer";
class Home extends React.Component {
  componentWillMount() {
    let { showMenus, changecurrent } = this.props;
    showMenus();
    changecurrent("Home");
  }
  render() {
    return <div className="home">首页</div>;
  }
}
Home = connect(
  state => ({}),
  dispatch => bindActionCreators(commonReducer, dispatch)
)(Home);
export default Home;
