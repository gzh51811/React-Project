import React from 'react';

import withAxios from '../../hoc/withAxios';

import './SeriesContent.css';
import Header from '../CommonComponents/Header';
import { Icon } from 'antd';

//挂载history
import {withRouter} from 'react-router-dom';

class SeriesContent extends React.Component {
	constructor() {
		super();
		this.state = {
			goodsList:[]
		}
	}
	
	componentWillMount() {
		// console.log(this.props);
		this.getData();
	}
	
	goProduct = (goodsId) => {
		this.props.history.push({
			pathname:'/details/' + goodsId
		});
	}
	
	async getData() {
		let param = new URLSearchParams();
		param.append('num', this.props.idx*1+1)
		let {
			data
		} = await this.props.axios({
			method: 'post',
			url: '/setting/findGoods',
			data: param
		});
		// console.log(data)
		this.setState({
			goodsList: data
		});
	}
	
	render() {
		let {goodsList} = this.state;
		return <div className="SeriesContentBox">
			<ul>
			 {
				 goodsList.map((item,idx)=>{
					 return <li onClick={this.goProduct.bind(this,item._id)} key={idx}>
						<img src={item.url}/>
						<p>{item.name}</p>
						<p><span>￥{item.price}</span><span style={{float:"right",color:"#666"}}><Icon type="form" />6</span></p>
					</li>
				})
			 }
			</ul>
	    </div>
	}
}
// 高阶组件的应用
SeriesContent = withAxios(SeriesContent);
SeriesContent = withRouter(SeriesContent);

export default SeriesContent;