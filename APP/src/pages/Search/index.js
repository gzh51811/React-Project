import React from 'react';
import './index.css'
import { Input, Icon } from 'antd';

import Commend from '../Home/commend'

class Search extends React.Component {
	constructor() {
        super();
        this.state = {
        	searchKeyword: '',//关键词搜索
        	historySearch:[]//历史搜索记录
        }
    }
	
	emitEmpty = () => {
	    this.KeywordInput.focus();
	    this.setState({ searchKeyword: '' });
	}
	
	onChangeKeyword = (e) => {
	    this.setState({ searchKeyword: e.target.value });
	}
	
	render(){
	    return <div>
	    	<div className="SearchBox">
	    			<div className="SearchBoxInput">
	    				<Input
				    		size="large"
						    placeholder="要买什么"
						    suffix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
						    value={this.searchKeyword}
						    onChange={this.onChangeKeyword}
						    ref={node => this.KeywordInput = node}
						/>
						<p>大家都在搜:</p>
	    			</div>
	    			<div className="SearchBoxKeyword">
	    				<span>夏凉被</span>
						<span>原棉毛巾</span>
						<span>老粗布</span>
						<span>麻韵质享</span>
						<span>磨毛件套</span>
						<span>止鼾枕</span>
						<span>花鸟绣花</span>
						<span>暖绒印花</span>
						<span>乳胶床垫</span>
						<span>婚庆件套</span>
						<span>棉花被</span>
						<span>羽绒被</span>
						<span>鸭绒枕</span>
						<span>软绵绵</span>
						<span>牙刷</span>
						<span>随心裁</span>
						<span>乳胶枕</span>
						<span>家居服</span>
						<span>阿瓦提</span>
						<span>浴巾</span>
	    			</div>
	    			<div className="SearchBoxHistoryKeyword">
	    				<p>历史搜索:</p>
	    				<span>浴巾</span>
	    			</div>
	    	</div>
	    	<div className="SearchBoxFooter">
	    		<p><span>猜你喜欢</span><i></i></p>
	    		<div className="SearchBoxCommend">
	    			<Commend></Commend>
	    		</div>
	    	</div>
	    </div>
	}
}
//<></>
export default Search;