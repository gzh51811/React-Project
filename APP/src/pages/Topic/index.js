import React from 'react';

import Header from '../CommonComponents/Header';
import TopicFooter from './topicFooter';

import withAxios from '../../hoc/withAxios';
import './index.css'
import { Avatar } from 'antd';


class Topic extends React.Component {
	constructor() {
		super();
		this.state = {
			
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

	render() {
		return(
			<div className="topic">
				<Header>话题主页</Header>
				<img src="https://activity.dapuimg.com/%E7%B2%BE%E9%80%89%E8%AF%9D%E9%A2%98-3.jpg"/>
        		<div className="topicContent">
        			<h2>用了它，一万块的衬衫也敢扔进洗衣机里直接洗！</h2>
        			<div className="topicHosterInfo">
	        			<Avatar size="large" src="https://activity.dapuimg.com/%E5%A4%A7%E6%9C%B4%E5%A4%B4%E5%83%8F.jpg" />
	        			<span style={{marginLeft:'5px',fontWeight:800}}>大朴</span>
	        			<span style={{marginLeft:'5px',fontWeight:800,float:"right"}}>2018-02-03</span>
	        			<div className="topicContentText">
		        			<p>对像小编这样的懒人来说，<strong>洗衣机</strong>可是解放双手的一大神器。</p>
		        			<img src="http://activity.dapuimg.com/1551256526000717.jpg"/>
		        			<p>但是假如把衣服直接放在洗衣机里，不但娇贵面料容易
		        				<strong>变形受损</strong>
		        				，洗了几次就扭曲成一滩抹布，而且每次洗完以后裤子和袖子
		        				<strong>打结缠绕</strong>
		        				就让我失去了晒衣服的欲望……
		        			</p>
		        			<img src="http://activity.dapuimg.com/1551256533000314.jpg"/>
		        			<p>所以每次对贵重衣物以及料子比较脆弱的衣服，小编都是
		        				<strong>辛辛苦苦手洗</strong>
		        				的（请表扬我），偏偏现在冬天到了，即便用热水手洗也仿佛酷刑一般，让我不得不放弃。
		        			</p>
		        			<img src="http://activity.dapuimg.com/1551256540000710.jpg"/>
		        			<p>而且像我已经结婚的闺蜜家里三口人，衣服全靠手洗是要
		        				<strong>累死</strong>
		        				的，有没有什么好的对策呢？
		        			</p>
		        			<p></p>
		        			<p>噔噔噔噔！今天的主角终于可以上场了！没错，今天小编就是要给大家安利这款
		        				<strong>超好用的洗衣神器</strong>
		        				——
		        			</p>
		        			<p></p>
		        			<p></p>
		        			<p></p>
		        			<p className="topicContentMiddle">四大核心功能卖点</p>
		        			<p className="topicContentMiddle">助力一键机洗</p>
		        			<p></p>
		        			<p></p>
		        			<p className="topicContentMiddle">
		        				<span style={{background:"rgba(234, 209, 141, 0.580392)"}}>/防磨损/</span>
		        			</p>
		        			<img src="http://activity.dapuimg.com/1551256547000110.jpg"/>
		        			<p>机洗过程中，
		        				<strong>金属饰品</strong>
		        				很容易甩掉并刮伤其他衣物，将衣物放入洗衣袋，可避免洗衣机在高速旋转甩压的过程中，造成衣物缝合处开线或扣子脱落，并可
		        				<strong>隔离洗衣机对衣物的磨损</strong>。
		        			</p>
		        			<p className="topicContentMiddle">
		        				<span style={{background:"rgba(234, 209, 141, 0.580392)"}}>/防缠绕/</span>
		        			</p>
		        			<img src="http://activity.dapuimg.com/155125655400084.jpg"/>
		        			<p>而且由于洗衣袋的禁锢，可有效
		        				<strong>防止大量衣服缠绕打结</strong>
		        				，在保护衣物的同时也
		        				<strong>方便后续的晾晒</strong>和整理。
		        			</p>
		        			<p className="topicContentMiddle">
		        				<span style={{background:"rgba(234, 209, 141, 0.580392)"}}>/防变形/</span>
		        			</p>
		        			<img src="http://activity.dapuimg.com/155125656100016.jpg"/>
		        			<p>而洗衣袋最实用的功能，就是可以阻止强力洗涤时因衣物互相缠绕扭曲导致的
		        				<strong>衣物变形问题</strong>
		        				，机洗也
		        				<strong>不会让衣服越洗越松</strong>啦！
		        			</p>
		        			<p className="topicContentMiddle">
		        				<span style={{background:"rgba(234, 209, 141, 0.580392)"}}>/方便卫生/</span>
		        			</p>
		        			<img src="http://activity.dapuimg.com/1551256568000819.jpg"/>
		        			<p>而且正因为洗衣袋的隔离，可将衣物之间
		        				<strong>相互隔离，杜绝污染</strong>
		        				。即使是内衣裤也可使用
		        				<strong>内衣专用洗衣袋</strong>机洗。
		        			</p>
		        			<p className="topicContentMiddle">除此以外，还有以下
		        				<span style={{background:"rgba(234, 209, 141, 0.580392)"}}>贴心设计</span>：
		        			</p>
		        			<p className="topicContentMiddle">精心挑选·圆形设计</p>
		        			<img src="http://activity.dapuimg.com/155125657600040.jpg"/>
		        			<p>经过设计师的数百次试验及精心挑选，终于确定了有别传统的
		        				<strong>圆形造型</strong>
		        				，圆形的结构在洗衣机内部更易滚动，不仅助力洗涤还不易残留洗衣液。
		        			</p>
		        			<p className="topicContentMiddle">无荧光网布·安全放心</p>
		        			<img src="http://activity.dapuimg.com/155125658200082.jpg"/>
		        			<p>而坚持大朴一贯以来的方针，这款洗衣袋布料亦使用
		        				<strong>无荧光网布</strong>
		        				。不仅孔洞细腻，而且具有极强的抗张力和耐腐蚀性，网料编制紧密，长久使用也不会变形走位。
		        			</p>
		        			<p className="topicContentMiddle">细节处理·贴心耐用</p>
		        			<img src="http://activity.dapuimg.com/155125658900040.jpg"/>
		        			<p>洗衣袋的细节处亦是诚意满满，经常使用的拉链处我们选择了高品质带大朴logo的
		        				<strong>YKK拉链</strong>
		        				，流畅且耐用。而且还有
		        				<strong>贴心松紧带设计</strong>
		        				可以藏住拉链头，减少洗衣过程中的磨损。
		        			</p>
		        			<p className="topicContentMiddle">好物推荐</p>
		        			
		        		</div>
	        		</div>
        		</div>
        		<TopicFooter></TopicFooter>
        	</div>
		)
	}
}
// 高阶组件的应用
Topic = withAxios(Topic);

export default Topic;