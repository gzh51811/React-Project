import React, { Component } from 'react';
import {
    Form, Icon, Input, Button,
  } from 'antd';
import withAxios from '../../hoc/withAxios';

class Login extends Component {
    constructor(){
        super()
        this.state={
            
        }
    }
    componentDidMount(){
        let token = localStorage.getItem("token")
        this.props.axios.post('http://47.102.102.242:1014/users/autoLogin', {
            token:token
        }).then((response)=> {
            if(response.data==="success"){
                this.props.history.push({pathname: '/app/home'})
            }
        });
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            this.props.axios.post('http://47.102.102.242:1014/users/login', {
                username:values.username,
                password:values.password
            }).then((response)=> {
                if(response.data.status==="success"){
                    localStorage.setItem("token",response.data.token);
                    localStorage.setItem("username",values.username);
                    this.props.history.push({pathname: '/app/home'})
                }else{
                    alert('登录失败')
                }
            });
          }
        });
    }
    
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div id='login' 
                style={{ height: '100%',
                         width:'300px',
                         margin:'200px auto'}}>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                    {/* Or <a href="">register now!</a> */}
                </Form>
            </div>
        );
    }
}

Login = withAxios(Login);
export default Form.create()(Login); 