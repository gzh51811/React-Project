import React from 'react';

import Header from '../CommonComponents/Header'
import SortDetails from './SortDetails.js'
import withAxios from '../../hoc/withAxios';
import './index.css'
import { Tabs, Select } from 'antd';
const TabPane = Tabs.TabPane;
const Option = Select.Option;



class Sort extends React.Component {
	constructor() {
		super();
		this.state = {
			tabPosition: 'left',
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

	async componentWillMount() {

		// 使用axios
		//      let { data } = await this.props.axios.get('/mobile/index.php', {
		//          params: {
		//              act: 'goods',
		//              op: 'goods_list',
		//              keyword: '',
		//              page: 10,
		//              curpage: 1
		//          }
		//      });
		//
		//      console.log(data);
		//
		//      this.setState({
		//          datalist: data.datas.goods_list
		//      });

	}

	changeTabPosition = (tabPosition) => {
		this.setState({
			tabPosition
		});
	}

	render() {
		let {
			sortArray
		} = this.state;
		return(
			<div className="sort">
        		<Header rightButton={'search'}>类目</Header>
        		<Tabs tabPosition = {this.state.tabPosition} >
        			{
        				sortArray.map((item,idx)=><TabPane tab={item} key={idx}>
							<SortDetails>{item}</SortDetails>
						</TabPane>)
        			}
				</Tabs> 
        	</div>
		)
	}
}

// 高阶组件的应用
Sort = withAxios(Sort);

export default Sort;