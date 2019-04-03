import React from 'react';

import withAxios from '../../hoc/withAxios';
//挂载history
import {withRouter} from 'react-router-dom'

import './SortSeries.css';

class SortSeries extends React.Component {
	constructor() {
		super();
		this.state = {
			themeImgSrc:'',
			themeSeriesList:[]
		}
	}

	componentWillMount() {
		//		console.log('分类系列',this.props)
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

		console.log(data);

		this.setState({
			themeImgSrc:'',
			themeSeriesList: data.datas.themeSeriesList
		});

	}
	
	goSeriesGoods = (e) =>{
//		console.log(e.target.tagName);
		let themeSeries='';
		if (e.target.tagName.toLowerCase()=='img') {
			themeSeries=e.target.nextElementSibling.innerHTML;
		}else if (e.target.tagName.toLowerCase()=='p') {
			themeSeries=e.target.innerHTML;
		}
//		console.log(themeSeries);
		this.props.history.push({
			pathname:'/sort/series/' + themeSeries
		})
	}

	render() {
		let {
			children,
			sortArray
		} = this.props;
		return <div className="sortBox">
	    	<div className="sortImg">
		    	<img src="https://activity.dapuimg.com/%E5%8D%A7%E5%AE%A4%E5%BA%8A%E5%93%81.jpg"/>
		    </div>
		    <div className="sortTitle">
		    	<p>—— {children}分类 ——</p>
		    </div>
		    <ul className="sortSeries">
		    	<li onClick={this.goSeriesGoods}>
		    		<img src="https://activity.dapuimg.com/%E4%BA%8C%E7%BA%A7%E7%B1%BB%E7%9B%AE_0049_%E5%8D%A7%E5%AE%A4%E5%BA%8A%E5%93%81-%E8%8A%B1%E9%B8%9F%E7%B3%BB%E5%88%97.png"/>
		    		<p className="sortSeriesName">花鸟系列</p>
		    	</li>
		    	<li>
		    		<img src="https://activity.dapuimg.com/%E4%BA%8C%E7%BA%A7%E7%B1%BB%E7%9B%AE_0049_%E5%8D%A7%E5%AE%A4%E5%BA%8A%E5%93%81-%E8%8A%B1%E9%B8%9F%E7%B3%BB%E5%88%97.png"/>
		    		<p className="sortSeriesName">花鸟系列</p>
		    	</li>
		    	<li>
		    		<img src="https://activity.dapuimg.com/%E4%BA%8C%E7%BA%A7%E7%B1%BB%E7%9B%AE_0049_%E5%8D%A7%E5%AE%A4%E5%BA%8A%E5%93%81-%E8%8A%B1%E9%B8%9F%E7%B3%BB%E5%88%97.png"/>
		    		<p className="sortSeriesName">花鸟系列</p>
		    	</li>
		    	<li>
		    		<img src="https://activity.dapuimg.com/%E4%BA%8C%E7%BA%A7%E7%B1%BB%E7%9B%AE_0049_%E5%8D%A7%E5%AE%A4%E5%BA%8A%E5%93%81-%E8%8A%B1%E9%B8%9F%E7%B3%BB%E5%88%97.png"/>
		    		<p className="sortSeriesName">花鸟系列</p>
		    	</li>
		    	<li>
		    		<img src="https://activity.dapuimg.com/%E4%BA%8C%E7%BA%A7%E7%B1%BB%E7%9B%AE_0049_%E5%8D%A7%E5%AE%A4%E5%BA%8A%E5%93%81-%E8%8A%B1%E9%B8%9F%E7%B3%BB%E5%88%97.png"/>
		    		<p className="sortSeriesName">花鸟系列</p>
		    	</li>
		    </ul>
	    </div>
	}
}

// 高阶组件的应用
SortSeries = withAxios(SortSeries);
SortSeries = withRouter(SortSeries);

export default SortSeries;