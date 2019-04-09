import React, { Component } from 'react';
import {
    Form, Input, Button
} from 'antd';
import withAxios from '../../hoc/withAxios';
import store from '../../store';  


class EditUser extends Component {
    constructor(){
        super()
        this.state={
            confirmDirty: false,
            userInfo:[]
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log(values);
                this.props.axios.post('http://47.102.102.242:1014/setting/updateUsers', {
                    username:values.username,
                    password:values.password
                }).then((response)=> {
                    if(response.status===200){
                        alert('修改成功')
                        this.props.history.push({pathname: '/app/user'})
                    }else{
                        alert('修改失败')
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

        let id = this.props.history.location.search.slice(4)
        // console.log(id)
        if(!id||store.getState().userInfo.length<=0){
            this.props.history.push({pathname: '/app/user'})
        }
        //获取当前商品数据
        this.setState({
            userInfo:store.getState().userInfo[0]
        })
    }


    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
                <Form.Item label="用户名">
                    {getFieldDecorator('username', {
                        initialValue:this.state.userInfo.record?this.state.userInfo.record.username:'',
                        rules: [{ required: true, message: 'Please input your name!' }],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item
                    label="密码"
                    >
                    {getFieldDecorator('password', {
                        initialValue:this.state.userInfo.record?this.state.userInfo.record.password:'',
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


EditUser = withAxios(EditUser);
export default Form.create()(EditUser); ;