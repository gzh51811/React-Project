import { Carousel } from 'antd';
import moment from 'moment';
import React from 'react';

import './commend.css'

class Commend extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}
	render() {
		return (
			<div>
				<h6 style={{margin:"7px 0"}}>用户喜爱的热销精品</h6>
	        	<div className="CommendBox">
		        	<Carousel dots="false">
						<div className="CommendBoxItem">
							<img src="https://p2.dapuimg.com/public/images/9c/70/a8/4192abdfdcedd99c0e5ca28820628e08.jpg?1537929468#h"/>
							<p className="CommendBoxItemName">针织草木染四件套</p>
							<p className="CommendBoxItemPrice">￥1399</p>
						</div>
						<div className="CommendBoxItem">
							<img src="https://p2.dapuimg.com/public/images/9c/70/a8/4192abdfdcedd99c0e5ca28820628e08.jpg?1537929468#h"/>
							<p className="CommendBoxItemName">针织草木染四件套</p>
							<p className="CommendBoxItemPrice">￥1399</p>
						</div>
						<div className="CommendBoxItem">
							<img src="https://p2.dapuimg.com/public/images/9c/70/a8/4192abdfdcedd99c0e5ca28820628e08.jpg?1537929468#h"/>
							<p className="CommendBoxItemName">针织草木染四件套</p>
							<p className="CommendBoxItemPrice">￥1399 </p>
						</div>
					</Carousel>
		        </div>
			</div>
		)
	}
}

export default Commend;