import React from 'react';
import './Header.css'
import { Button, Icon } from 'antd';

//挂载store全局函数
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import commonAction from '../../actions/commonAction';
//挂载history
import {withRouter} from 'react-router-dom'

class Header extends React.Component {
	constructor() {
        super();
        this.state = {
        	
        }
    }
	
//	componentDidMount(){//测试是否把方法挂载成功
//	   console.log('header',this.props)
//  }
	
	render(){
		let {children,back,goSearch,history} =this.props;
		let {rightButton='small-dash'}=this.props;
	    return <div className="pagesHeader">
	    	<Button icon="left" className="HeaderButton" onClick={back.bind('',history)}></Button>
	    	<h3 className="HeaderTitle">{children}</h3>
	    	<Button icon={rightButton} className="HeaderButton fr" onClick={goSearch.bind('',history)}></Button>
	    </div>
	}
}

//把history挂在props上
Header=withRouter(Header);

Header = connect(
    state=>{return {}},
    dispatch=>bindActionCreators(commonAction,dispatch)
)(Header)

export default Header;