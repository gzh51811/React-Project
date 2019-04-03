import React from 'react';

import withAxios from '../../hoc/withAxios';

import './SeriesContent.css';
import Header from '../CommonComponents/Header';
import { Icon } from 'antd';

class SeriesContent extends React.Component {
	constructor() {
		super();
		this.state = {
			
		}
	}

	render() {
		return <div className="SeriesContentBox">
			<ul>
				<li>
					<img src="https://p2.dapuimg.com/public/images/59/b0/90/29aac585e8b756d74831dde6eaec5034.jpg?1550123998#h"/>
					<p>300根精梳纯棉缎纹花鸟绣花四件套</p>
					<p><span>￥869</span><span style={{float:"right",color:"#666"}}><Icon type="form" />6</span></p>
				</li>
				<li>
					<img src="https://p2.dapuimg.com/public/images/59/b0/90/29aac585e8b756d74831dde6eaec5034.jpg?1550123998#h"/>
					<p>300根精梳纯棉缎纹花鸟绣花四件套</p>
					<p><span>￥869</span><span style={{float:"right",color:"#666"}}><Icon type="form" />6</span></p>
				</li>
			</ul>
	    </div>
	}
}
// 高阶组件的应用
SeriesContent = withAxios(SeriesContent);


export default SeriesContent;