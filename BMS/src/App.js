import React, { Component } from 'react';
import './App.css';

import {Route,Switch,Redirect,withRouter} from 'react-router-dom';

import Home from './pages/Home';
import AddGoods from './pages/AddGoods';
import EditGoods from './pages/EditGoods';
import User from './pages/User';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';

import 'antd/dist/antd.css';
import {
  Layout, Menu, Icon,
} from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends Component {
    constructor() {
        super();
        this.state = {
            navs: [
                {
                    text: '商品列表',
                    name: 'Home',
                    path: '/home'
                },
                {
                    text: '添加商品',
                    name: 'AddGoods',
                    path: '/addgoods'
                },
                {
                    text: '修改商品',
                    name: 'EditGoods',
                    path: '/editgoods'
                },
                {
                    text: '登录',
                    name: 'Login',
                    path: '/login'
                },{
                    text: '用户列表',
                    name: 'User',
                    path: '/user'
                },{
                    text: '添加用户',
                    name: 'AddUser',
                    path: '/adduser'
                },{
                    text: '编辑用户',
                    name: 'EditUser',
                    path: '/edituser'
                }
            ],
            current:'Home',
            LogonStatus:false
        }
    }


    componentDidMount(){
        let username = localStorage.getItem("username")
        let username1 = document.querySelector('.username')
        let login = document.querySelector('.Login')
        let signout = document.querySelector('.Signout')
        if(username){
            username1.innerHTML=username;
            login.style.display='none';
            signout.style.display='inline-block';
        }else{
            username1.innerHTML='';
            login.style.display='inline-block';
            signout.style.display='none';
        }
    }

    //添加高亮
    // addClassName(){
    //     let pathname = this.props.history.location.pathname
    //     let allClassName = document.querySelectorAll('.ant-menu-item');
    //     for(let i = 0;i<this.state.navs.length;i++){
    //         if(pathname === this.state.navs[i].path){
    //             allClassName[i].classList.add("ant-menu-item-selected");               
    //             break;
    //         }
    //     }
    // }

    handleClick = (e)=>{

        this.setState({
            current: e.key
        },()=>{
            //路由跳转：编程式导航
            // 利用withRouter()高阶组件实现history的传递

            this.props.history.push('/app/'+e.key.toLowerCase());
        });


    }

    // 退出
    Signout(){
        if(window.confirm('确认要退出吗？')){
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            this.props.history.push({pathname: '/login'})
        }
    }


    getlogin(){
        this.props.history.push({pathname: '/login'})
    }

    render() {
        return (
            <Layout>
                <Header className="header">
                    <div id='account' style={{color:'#40a9ff',cursor:'pointer',userSelect:'none',float:'right'}}>
                        <span className='username'></span>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span onClick={this.getlogin.bind(this)} className='Login'>Login</span>
                        <span onClick={this.Signout.bind(this)} className='Signout'>Sign out</span>
                    </div>
                {/* <div className="logo" /> */}
                {/* <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu> */}
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }} >
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1','sub2']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                        <SubMenu key="sub1" 
                            onClick={this.handleClick}
                            title={<span><Icon type="user" />商品管理</span>}>
                            {
                                this.state.navs.slice(0,2).map(item => <Menu.Item key={item.name} >{item.text}</Menu.Item>)
                            }
                        </SubMenu>
                        <SubMenu key="sub2" 
                            onClick={this.handleClick}
                            title={<span><Icon type="user" />用户管理</span>}>
                            {
                                this.state.navs.slice(4,-1).map(item => <Menu.Item key={item.name} >{item.text}</Menu.Item>)
                            }
                        </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280,}}>
                            <Switch>
                                <Route path='/app/home' component={Home}/>
                                <Route path='/app/addgoods' component={AddGoods}/>
                                <Route path='/app/editgoods' component={EditGoods}/>
                                <Route path='/app/user' component={User}/>
                                <Route path='/app/adduser' component={AddUser}/>
                                <Route path='/app/edituser' component={EditUser}/>
                                <Redirect from="/app/" to="/app/home" />
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

App = withRouter(App);

export default App;
