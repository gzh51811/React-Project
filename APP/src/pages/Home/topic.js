import { Comment, Tooltip, List ,Icon } from 'antd';
import moment from 'moment';
import React from 'react';

import './topic.css'

class Topic extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			likes: 0,
		    dislikes: 0,
		    action: null,
			data: [
				{
					actions: [
						<span>
					        <Tooltip title="Dislike">
					          <Icon
					            type="eye"
					            onClick={this.dislike}
					          />
					        </Tooltip>
					        <span style={{ paddingLeft: 8, cursor: 'auto' }}>
					          {this.dislikes}
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
					          {this.likes}
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
					          {this.dislikes}
					        </span>
				      	</span>
					],
					author: '大朴',
					avatar: 'https://activity.dapuimg.com/%E5%A4%A7%E6%9C%B4%E5%A4%B4%E5%83%8F.jpg',
					content: (
						<div>
							<img className="topicImg" src="https://activity.dapuimg.com/%E7%B2%BE1.jpg"/>
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
				},
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
		this.setState({
			likes: 1,
			dislikes: 0,
			action: 'liked',
		});
	}

	dislike = () => {
		this.setState({
			likes: 0,
			dislikes: 1,
			action: 'disliked',
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
			    />
				)
			}	
			/>
	}
}

export default Topic;