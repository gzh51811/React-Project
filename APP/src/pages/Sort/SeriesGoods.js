import React from 'react';

import Header from '../CommonComponents/Header';
import SeriesContent from './SeriesContent';

import withAxios from '../../hoc/withAxios';

//挂载store全局函数
import {connect} from 'react-redux';
//挂载history
import {withRouter} from 'react-router-dom';


import './SeriesGoods.css';
import { Tabs, Radio } from 'antd';
const TabPane = Tabs.TabPane;

class SeriesGoods extends React.Component {
	constructor() {
		super();
		this.state = {
			themeSeriesName:'',
			idx:'0'
		}
	}

	componentWillMount() {
		// console.log('系列商品显示',this.props)
		let idx = this.props.location.search.slice(5)
		let {themeSeries} = this.props.match.params;
		this.setState({
			themeSeriesName:themeSeries,
			idx
		});
		// console.log('系列商品显示',this.state)
	}

	async getData() {
		//修改接口和处理数据渲染就好#########################################################
		let {
			data
		} = await this.props.axios.get('/sort/series', {
			params: {
				theme:this.props.children
			}
		});

		this.setState({
			themeImgSrc:'',
			themeSeriesList: data.datas.themeSeriesList
		});

	}
	
	changeDate(_this,idx){
		_this.setState({
			idx
		});
		// console.log(_this)
		//发送新请求
	}

	render() {
		let {
			children
		} = this.props;
		let {SeriesArray}=this.props.sort;
		return <div className="SeriesBox">
			<Header rightButton={'search'}>{this.state.themeSeriesName}</Header>
			<div>
		        <Radio.Group onChange={this.handleModeChange} value="top" style={{ marginBottom: 8 }}>
		          <Radio.Button value="top">Horizontal</Radio.Button>
		          <Radio.Button value="left">Vertical</Radio.Button>
		        </Radio.Group>
		        <Tabs
		          defaultActiveKey="1"
		          tabPosition="top"
		          size="large"
		          onChange={this.changeDate.bind(this,this)}
				  activeKey = {this.state.idx}
		        >
		        	{SeriesArray.map((item,idx)=>{
		        		return <TabPane tab={item} key={idx}>
			        			<SeriesContent idx={this.state.idx}/>
			        		</TabPane>
		        		}
		        	)}
		          
		        </Tabs>
	      	</div>
	    </div>
	}
}

// 高阶组件的应用
SeriesGoods = withAxios(SeriesGoods);
SeriesGoods = withRouter(SeriesGoods);

SeriesGoods = connect(
    state=>({sort:state.sort}),
    dispatch=>({})
)(SeriesGoods)

export default SeriesGoods;