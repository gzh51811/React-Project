import React, {
	Component
} from 'react';

import { Menu, Icon, Badge } from 'antd';
import { Route, Redirect, Switch, NavLink, withRouter } from 'react-router-dom';
// 引入connect高阶组件
import { connect } from 'react-redux'
//引入以导航菜单分类的大组件
import Home from './pages/Home';
import Sort from './pages/Sort';
import Goods from './pages/Goods';
import Cart from './pages/Cart';
import Topic from './pages/Topic';
import Search from './pages/Search';
import SeriesGoods from './pages/Sort/SeriesGoods';

//引入组件个人样式
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			navs: [{
					text: '首页',
					name: 'Home',
					path: '/home',
					icon: 'home'
				},
				{
					text: '分类',
					name: 'Sort',
					path: '/sort',
					icon: 'appstore'
				},
				{
					text: '购物车',
					name: 'Cart',
					path: '/cart',
					icon: 'shopping-cart'
				},
				{
					text: '我的',
					name: 'Goods',
					path: '/goods',
					icon: 'user'
				}
			],
			current: 'Home'
		}

	}
	handleClick = (e) => {
		this.setState({
			current: e.key
		}, () => {
			//路由跳转：编程式导航
			// 利用withRouter()高阶组件实现history的传递
			this.props.history.push('/' + e.key.toLowerCase());
		});
	}
	render() {
		return(
			<div className="App">
				<Switch>
                    <Route path="/home" component={Home} exact/>
                    <Route path="/sort" component={Sort} exact/>
                    <Route path="/sort/series/:themeSeries" component={SeriesGoods} exact/>
                    <Route path="/goods/:id" component={Goods} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/home/topic" component={Topic} exact/>
                    <Route path="/search" component={Search} />
                    <Redirect from="/" to="/home" />
                </Switch>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal" className="NavMenu"
                >
                    {
                        this.state.navs.map(item => <Menu.Item className="NavMenuItem" key={item.name}>
                        {
                            item.name=='Cart' 
                            ? 
                            <Badge count='3'>
                            	<Icon className="NavMenuIcon" type={item.icon}/>
                            	<span className="NavMenuItemText">{item.text}</span>
                            </Badge>
                            :
                            <>
	                            <Icon className="NavMenuIcon" type={item.icon}/>
	                            <span className="NavMenuItemText">{item.text}</span>
                            </>
                        }
                        </Menu.Item>)
                    }
                    
                </Menu>
            </div>
		);
	}
}

App = withRouter(App);

//把仓库store里的数据,方法挂在实例上
const mapStateToProps = (state) => {
	return {
		//      cartlen:state.cart.goodslist.length
	}
}
App = connect(mapStateToProps)(App);

export default App;