import React from 'react';
import './topicFooter.css'
import { Input, Icon } from 'antd';


class TopicFooter extends React.Component {
	constructor() {
        super();
        this.state = {
        	inputVal: ''
        }
    }
	
	emitEmpty = () => {
	    this.textInput.focus();
	    this.setState({ inputVal: '' });
	}
	
	onChangeUserName = (e) => {
	    this.setState({ inputVal: e.target.value });
	}
	
	render(){
	    return <div className="topicFooter">
	    			<div className="InputBox">
			    		<Input
			    			size="large"
					        placeholder="我有话要说"
					        prefix={<Icon type="message" style={{ color: 'rgba(0,0,0,.25)' }} />}
					        value={this.inputVal}
					        onChange={this.onChangeUserName}
					        ref={node => this.textInput = node}
					    />
	    			</div>
	    			<div className="ButtonBox">
	    				<span><Icon type="like"/><em>13</em></span>
	    				<span><Icon type="message"/><em>5</em></span>
	    			</div>
	    	</div>
	}
}

export default TopicFooter;