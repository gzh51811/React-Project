import React from 'react';

import Header from '../CommonComponents/Header';
import SeriesContent from './SeriesContent';

import withAxios from '../../hoc/withAxios';

//挂载store全局函数
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import commonAction from '../../actions/commonAction';
//挂载history
import {withRouter} from 'react-router-dom';


import './SeriesGoods.css';
import { Tabs, Radio } from 'antd';
const TabPane = Tabs.TabPane;

class SeriesGoods extends React.Component {
	constructor() {
		super();
		this.state = {
			themeSeriesName:''
		}
	}

	componentWillMount() {
//		console.log('系列商品显示',this.props)
		let {themeSeries} = this.props.match.params;
		this.setState({
			themeSeriesName:themeSeries
		});
		console.log('系列商品显示',this.props)
	}

	async getDate() {

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
	
	changeDate(activeKey){
		console.log('点击切换回调')
		//发送新请求
	}

	render() {
		let {
			children
		} = this.props;
		let {SeriesArray}=this.props.com;
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
		          onChange={this.changeDate}
		        >
		        	{SeriesArray.map((item,idx)=>{
		        		return <TabPane tab={item} key={idx}>
			        			<SeriesContent/>
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
    state=>({com:state.comon}),
    dispatch=>bindActionCreators(commonAction,dispatch)
)(SeriesGoods)

export default SeriesGoods;