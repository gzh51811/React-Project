import { Carousel } from 'antd';
import React from 'react';
import { withRouter } from 'react-router-dom';
import withAxios from '../../hoc/withAxios';

import './commend.css'

class Commend extends React.Component {
	constructor(props) {
		super();
		this.state = {
			commendList:[]//存放home首页推荐商品
		}
	}
	
	goProduct = (goodsId) => {
		this.props.history.push({
			pathname:'/product/' + goodsId
		});
	}
	async getData(){
		//修改接口和处理数据渲染就好#########################################################
		let param = new URLSearchParams()
		param.append('num', 2)
		let {
			data
		} = await this.props.axios({
			method: 'post',
			url: '/setting/findGoods',
			data: param
		});
		this.setState({
			commendList: data
		});
		// console.log(this.state.commendList);
	}
	componentWillMount() {
		// console.log(this.props);
		this.getData();
	}
	componentDidMount() {
// 		//查找元素绑定事件
// 		let box = document.getElementsByClassName('slick-slide')[0];
// 		console.log(box);
// 		for (var i = 0; i < box.childNodes.length; i++) {
// 			box.childNodes[i].className="slick-slide slick-active slick-current"
// 		}
// 		box.addEventListener('click',(e)=>{
// 			console.log(e.target);
// 			if(e.target.tagName.toLocaleLowerCase()=='img'){
// 				let goodsId = e.target.getAttribute('date-goodsid');
// 				// this.goProduct(goodsId);
// 			}else if(e.target.tagName.toLocaleLowerCase()=='p'){
// 				let goodsId = e.target.parentNode.childNodes[0].getAttribute('date-goodsid');
// 				// this.goProduct(goodsId);
// 			}
// 		},true)
	}
	render() {
		let {commendList} = this.state;
		
		return (
			<div>
	        	<div className="CommendBox">
		        	<Carousel dots="false" afterChange={()=>{}}>
							{
								commendList.map((item,idx)=>{
									return <div className="CommendBoxItem" key={idx} onClick={this.goProduct.bind(this,item._id)}>
										<img src={item.url} date-goodsid={item._id}/>
										<p className="CommendBoxItemName">{item.name}</p>
										<p className="CommendBoxItemPrice">￥{item.price}</p>
									</div>
								})
							}
					</Carousel>
		        </div>
			</div>
		)
	}
}
Commend = withRouter(Commend);
Commend = withAxios(Commend);

export default Commend;