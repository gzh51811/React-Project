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
	handleClick = (e)=>{
        console.log(this,e)
        this.setState({
            current: e.key
        },()=>{
            //路由跳转：编程式导航
            // 利用withRouter()高阶组件实现history的传递
            this.props.history.push('/'+e.key.toLowerCase());
        });
    }
	render() {
		return(
			<div className="App">
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