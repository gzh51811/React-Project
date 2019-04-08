import React from 'react';

import Header from '../CommonComponents/Header';
import SortSeries from './SortSeries.js';
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
			themeImgList:[
				"https://activity.dapuimg.com/%E5%8D%A7%E5%AE%A4%E5%BA%8A%E5%93%81.jpg",
				"https://activity.dapuimg.com/%E7%94%9F%E6%B4%BB%E5%B7%BE%E7%B1%BB.jpg",
				"https://activity.dapuimg.com/%E5%A5%B3%E8%A3%85.jpg",
				"https://activity.dapuimg.com/%E7%94%B7%E8%A3%85.jpg",
				"https://activity.dapuimg.com/%E6%97%A5%E7%94%A8%E5%93%81.jpg",
				"https://activity.dapuimg.com/342x137.jpg",
				"https://activity.dapuimg.com/%E5%8C%85%E8%A2%8B.jpg"
			],
			sortArray:[
				"卧室床品",
				"冠军毛巾",
				"女装",
				"男装",
				"日用品",
				"洗涤用品",
				"包袋"
			]
		}
	}
	
	componentWillMount() {
		this.getDate(1);
		this.setState({
			themeImgSrc: this.state.themeImgList[0]
		});
	}
	
	changeSort(idx){
		//点击切换分类标题时请求数据重新渲染
		this.getDate(parseInt(idx)+1);
		this.setState({
			themeImgSrc: this.state.themeImgList[idx]
		});
	}
	
	//获取系列详细分类数据函数
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
		console.log('idex',data);
		let {updateSort} = this.props;
		//更新sortReducer里的系列详细分类数据
		updateSort(data);//调用的是aciton里的函数，返回type类型,后续利用第三方自动用dispatch调用符合type类型的处理逻辑函数
	}
	
	render() {
		let {
			sortArray,themeImgSrc,themeSeriesList
		} = this.state;
		return(
			<div className="sort">
        		<Header rightButton={'search'}>类目</Header>
        		<Tabs tabPosition = "left" onChange = {this.changeSort.bind(this)}>
        			{
        				sortArray.map((item,idx)=><TabPane tab={item} key={idx}>
							<SortSeries 
								themeImgSrc={themeImgSrc}
								>{item}
							</SortSeries>
						</TabPane>)
        			}
				</Tabs> 
        	</div>
		)
	}
}

Sort = withAxios(Sort);

Sort = connect(
    state=>({sort:state.sort}),
    dispatch=>bindActionCreators(sortAction,dispatch)
)(Sort)

export default Sort;