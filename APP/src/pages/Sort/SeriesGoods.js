import React from 'react';

import Header from '../CommonComponents/Header';
import SeriesContent from './SeriesContent';

import withAxios from '../../hoc/withAxios';

//挂载store全局函数
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import sortAction from '../../actions/sortAction';
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
		let idx = this.props.location.search.slice(5)
		let {themeSeries} = this.props.match.params;
		this.setState({
			themeSeriesName:themeSeries,
			idx
		});
		//组件刷新时要请求数据，修改全局sortReducer系列分类详情数据
		this.getDate(idx*1+1);
	}
	
	//获取系列分类详情函数
	async getDate(idx) {
		let param = new URLSearchParams();
		param.append('num', idx);
		let {
			data
		} = await this.props.axios({
			method: 'post',
			url: '/setting/findList',
			data: param
		});
		// console.log(data);
		let {updateSort} = this.props;
		//更新sortReducer里的系列详细分类数据
		updateSort(data);//调用的是aciton里的函数，返回type类型,后续利用第三方自动用dispatch调用符合type类型的处理逻辑函数
	}
	
	changeDate(_this,idx){
		_this.setState({
			idx
		});
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
		        		return <TabPane tab={item.name} key={idx}>
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
    dispatch=>bindActionCreators(sortAction,dispatch)
)(SeriesGoods)

export default SeriesGoods;