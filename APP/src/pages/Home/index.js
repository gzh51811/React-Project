import React from 'react';
import Header from '../CommonComponents/Header';
import './index.css';
import { Input, Icon } from 'antd';

//组件
import Topic from './topic';
import Commend from './commend'

class Home extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			keyword:''
	    };
	}
	emitEmpty = () => {
		this.userNameInput.focus();
		this.setState({ keyword: '' });
	}
	onChangeUserName = (e) => {
		this.setState({ keyword: e.target.value });
	}
	render(){
		const { keyword } = this.state;
		return <div className="home">
	        <Header>首页</Header>
	        <div style={{background:"#f0f0f0",margin:0}}>
	        	<img alt="logo" className="homeLogo" src="https://activity.dapuimg.com/2018091102.png"/>
	        	<Input className="homeSearch"
			        placeholder="发现居家好物"
			        prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
			        value={keyword}
			        onChange={this.onChangeUserName}
			      />
	        </div>
	        <div>
	        	<h3 style={{fontWeight:600,margin:"15px 0"}}>创建放心消费环境，树立诚信守法意识。</h3>
	        </div>
	        
	        {/*推荐商品*/}
	        <div style={{background:"#f0f0f0"}}>
	        	<h3 style={{fontWeight:600,margin:0,padding:"6px 0"}}>热门推销</h3>
	        </div>
	        <div>
	        	<Commend/>
	        </div>
	        
	        {/*精选话题*/}
	        <div style={{background:"#f0f0f0"}}>
	        	<h3 style={{fontWeight:600,margin:0,padding:"6px 0"}}>精选话题</h3>
	        </div>
	        <div className="topicBox">
	        	<Topic></Topic>
	        </div>
	        
	    </div>
	}
}

export default Home;