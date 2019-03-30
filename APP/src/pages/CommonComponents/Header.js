import React from 'react';
import './Header.css'
import { Button, Icon } from 'antd';


class Header extends React.Component {
	constructor() {
        super();
        this.state = {
        	
        }
    }
	render(){
		let {children} =this.props;
		let {rightButton='small-dash'}=this.props;
	    return <div className="pagesHeader">
	    	<Button icon="left" className="HeaderButton"></Button>
	    	<h3 className="HeaderTitle">{children}</h3>
	    	<Button icon={rightButton} className="HeaderButton fr"></Button>
	    </div>
	}
}

export default Header;