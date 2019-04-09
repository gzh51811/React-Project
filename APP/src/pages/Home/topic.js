import { Comment, Tooltip, List ,Icon } from 'antd';
import moment from 'moment';
import React from 'react';

import withAxios from '../../hoc/withAxios';
//挂载history
import {withRouter} from 'react-router-dom'

import './topic.css'

class Topic extends React.Component {
	constructor(props) {
		super();
		this.state = {
			likes: 0,
		    dislikes: 0,
		    action: null,
			data: [
				{
					actions: [],
					author: 'Han Solo',
					avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
					content: (
						<p>We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.</p>
					),
					datetime: (
						<Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
							<span>{moment().subtract(2, 'days').fromNow()}</span>
						</Tooltip>
					),
				}
			]
		};
	}
	like = () => {
		console.log(22)
		this.setState({
			likes: 1,
			dislikes: 0,
			action: 'liked',
		});
	}

	dislike = () => {
		console.log(11)
		this.setState({
			likes: 0,
			dislikes: 1,
			action: 'disliked',
		});
	}
	goTopic = (e) => {
		if (e.target.className === 'topicText'||e.target.className ==='topicImg') {
//			console.log('点击帖子内容跳转话题主页')
			this.props.history.push('/home/topic');
		}
	}
	
	componentWillMount() {
		// console.log(this.props);
		this.getData();//获取话题数据
	}
	
	//获取话题数据函数
	async getData(){
// 		let param = new URLSearchParams()
// 		param.append('num', 2)
// 		let {
// 			data
// 		} = await this.props.axios({
// 			method: 'post',
// 			url: '/setting/findGoods',
// 			data: param
// 		});
		let data = [1];//假数据
		let topicList = data.map((item)=>{
			return {
					actions: [
						<span>
					        <Tooltip title="Dislike">
					          <Icon
					            type="eye"
					            onClick={this.dislike}
					          />
					        </Tooltip>
					        <span style={{ paddingLeft: 8, cursor: 'auto' }}>
					          {this.state.likes}
					        </span>
				      	</span>,
						<span>
					        <Tooltip title="Like">
					          <Icon
					            type="like"
					            theme={'filled'}
					            onClick={this.like}
					          />
					        </Tooltip>
					        <span style={{ paddingLeft: 8, cursor: 'auto' }}>
					          {this.state.likes}
					        </span>
				      	</span>,
						<span>
					        <Tooltip title="Dislike">
					          <Icon
					            type="message"
					            onClick={this.dislike}
					          />
					        </Tooltip>
					        <span style={{ paddingLeft: 8, cursor: 'auto' }}>
					          {this.state.likes}
					        </span>
				      	</span>
					],
					author: '大朴',
					avatar: 'https://activity.dapuimg.com/%E5%A4%A7%E6%9C%B4%E5%A4%B4%E5%83%8F.jpg',
					content: (
						<div className="contentBox">
							<img className="topicImg" src="https://activity.dapuimg.com/%E7%B2%BE1.jpg" alt="话题"/>
							<p className="topicText">草木染｜植物提取染料，贴近肌肤的安全</p>
						</div>
					),
					datetime: (
						<Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
							<Icon type="dashboard" style={{marginRight:"5px"}}/>
							<span>{moment().subtract(1, 'days').fromNow()}</span>
							<Icon type="environment" style={{marginLeft:"5px"}}/>
						</Tooltip>
					),
				}
		})
		// console.log(topicList);
		//获取数据后处理成相应格式
		this.setState({
			data: topicList
		});
	}
	render() {
		let {
			data
		} = this.state
		return <List
			className="comment-list"
			itemLayout="horizontal"
			dataSource={data}
			renderItem = {item => (<Comment
			    actions={item.actions}
			    author={item.author}
			    avatar={item.avatar}
			    content={item.content}
			    datetime={item.datetime}
			    onClick = {this.goTopic}
			    />
				)
			}	
			/>
	}
}

//把history挂在props上
Topic=withRouter(Topic);
Topic = withAxios(Topic);

export default Topic;