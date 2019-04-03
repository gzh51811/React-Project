import React from 'react';

import withAxios from '../../hoc/withAxios';
//挂载history
import {withRouter} from 'react-router-dom'

//挂载store全局函数
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import commonAction from '../../actions/commonAction';

import './SortSeries.css';

class SortSeries extends React.Component {
	constructor() {
		super();
		this.state = {
			
		}
	}

	componentWillMount() {
		// console.log('分类系列',this.props)
	}
	
	goSeriesGoods = (idx,e) =>{
//		console.log(e.target.tagName);
		let themeSeries='';
		if (e.target.tagName.toLowerCase()==='img') {
			themeSeries=e.target.nextElementSibling.innerHTML;
		}else if (e.target.tagName.toLowerCase()==='p') {
			themeSeries=e.target.innerHTML;
		}
//		console.log(themeSeries);
		this.props.history.push({
			pathname:'/sort/series/' + themeSeries,
			search:"?idx="+idx
		})
	}

	render() {
		let {
			children,themeSeriesList,themeImgSrc
		} = this.props;
		let {SeriesArray} = this.props.sort;
		return <div className="sortBox">
	    	<div className="sortImg">
		    	<img src={themeImgSrc}/>
		    </div>
		    <div className="sortTitle">
		    	<p>—— {children}分类 ——</p>
		    </div>
		    <ul className="sortSeries">
		    	{
					SeriesArray.map((item,idx)=>{
						return  <li onClick={this.goSeriesGoods.bind(this,idx)} key={idx}>
								<img src="https://activity.dapuimg.com/%E4%BA%8C%E7%BA%A7%E7%B1%BB%E7%9B%AE_0049_%E5%8D%A7%E5%AE%A4%E5%BA%8A%E5%93%81-%E8%8A%B1%E9%B8%9F%E7%B3%BB%E5%88%97.png"/>
								<p className="sortSeriesName">{item}</p>
							</li>
					})
				}
		    </ul>
	    </div>
	}
}

// 高阶组件的应用
SortSeries = withAxios(SortSeries);
SortSeries = withRouter(SortSeries);

SortSeries = connect(
    state=>({sort:state.sort}),
    dispatch=>bindActionCreators(commonAction,dispatch)
)(SortSeries)

export default SortSeries;