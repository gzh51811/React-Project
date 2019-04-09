import React, { Component } from 'react';
import {
    Form, Input, Button
} from 'antd';
import withAxios from '../../hoc/withAxios';

class AddUser extends Component {
    constructor(){
        super()
        this.state={
            confirmDirty: false
        }
    }

    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.axios.post('http://47.102.102.242:1014/setting/insertUsers', {
                    username:values.username,
                    password:values.password
                }).then((response)=> {
                    if(response.status===200){
                        alert('添加成功')
                    }else{
                        alert('添加失败')
                    }
                });
            }
        });
    }


    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    //判断两次密码是否一致
    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
          callback('Two passwords that you enter is inconsistent!');
        } else {
          callback();
        }
    }
    
    componentDidMount(){
        let token = localStorage.getItem("token")
        this.props.axios.post('http://47.102.102.242:1014/users/autoLogin', {
            token:token
        }).then((response)=> {
            if(response.data!=="success"){
                this.props.history.push({pathname: '/login'})
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
                <Form.Item label="用户名">
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your name!' }],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item
                    label="密码"
                    >
                    {getFieldDecorator('password', {
                        rules: [{
                        required: true, message: 'Please input your password!',
                        }, {
                        validator: this.validateToNextPassword,
                        }],
                    })(
                        <Input type="password" />
                    )}
                </Form.Item>
                <Form.Item
                    label="确认密码"
                    >
                    {getFieldDecorator('confirm', {
                        rules: [{
                        required: true, message: 'Please confirm your password!',
                        }, {
                        validator: this.compareToFirstPassword,
                        }],
                    })(
                        <Input type="password" onBlur={this.handleConfirmBlur} />
                    )}
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

AddUser = withAxios(AddUser);
export default Form.create()(AddUser); 