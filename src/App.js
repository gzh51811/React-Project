import React, {
	Component
} from 'react';

import { Menu, Icon, Badge } from 'antd';
import { Route, Redirect, Switch, NavLink, withRouter } from 'react-router-dom';
// 引入connect高阶组件
import { connect } from 'react-redux'
//引入以导航菜单分类的大组件
import Home from './pages/Home';
import List from './pages/List';
import Goods from './pages/Goods';
import Cart from './pages/Cart';

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
					text: '列表',
					name: 'List',
					path: '/list',
					icon: 'bars'
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
	render() {
		return(
			<div className="container">
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    {
                        this.state.navs.map(item => <Menu.Item key={item.name}>
                        {
                            item.name=='Cart' 
                            ? 
                            <Badge count='3'><Icon type={item.icon} />{item.text}</Badge>
                            :
                            <>
                            <Icon type={item.icon} />{item.text}
                            </>
                        }
                        
                        </Menu.Item>)
                    }
                    
                </Menu>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/list" component={List} />
                    <Route path="/goods/:id" component={Goods} />
                    <Route path="/cart" component={Cart} />
                    <Redirect from="/" to="/home" />
                </Switch>
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