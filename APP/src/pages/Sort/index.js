import React from 'react';

import Header from '../CommonComponents/Header';
import SortDetails from './SortSeries.js';
import withAxios from '../../hoc/withAxios';

//挂载store全局函数
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import sortAction from '../../actions/sortAction';

import './index.css'
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

class Sort extends React.Component {
	constructor() {
		super();
		this.state = {
			themeImgSrc:'',
			themeSeriesList:[],
			sortArray:[
				"卧室床品",
				"冠军毛巾",
				"女装",
				"男装",
				"贴身衣物",
				"袜子拖鞋",
				"日用品",
				"洗涤用品",
				"包袋",
				"婴童用品"
			]
		}
	}
	
	changeSort(){
		//点击切换分类标题时请求数据重新渲染
		// this.getDate();
	}
	
	//获取数据函数
	async getDate() {
		//修改接口和处理数据渲染就好#########################################################
		let {
			data
		} = await this.props.axios.get('/sort/series', {
			params: {
				theme:this.props.children
			}
		});
		console.log(data);
		this.setState({
			themeImgSrc:'',
			themeSeriesList: data.datas.themeSeriesList
		});
	}
	
	render() {
		let {
			sortArray,themeImgSrc,themeSeriesList
		} = this.state;
		return(
			<div className="sort">
        		<Header rightButton={'search'}>类目</Header>
        		<Tabs tabPosition = "left" onChange = {this.changeSort}>
        			{
        				sortArray.map((item,idx)=><TabPane tab={item} key={idx}>
							<SortDetails 
								themeImgSrc={themeImgSrc}
								themeSeriesList={themeSeriesList}
								>{item}
							</SortDetails>
						</TabPane>)
        			}
				</Tabs> 
        	</div>
		)
	}
}

Sort = connect(
    state=>({}),
    dispatch=>bindActionCreators(sortAction,dispatch)
)(Sort)

export default Sort;