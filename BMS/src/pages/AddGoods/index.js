import React, { Component } from 'react';
import {
    Form, Input, Button,Cascader
} from 'antd';
import withAxios from '../../hoc/withAxios';

class AddGoods extends Component {
    constructor(){
        super()
        this.state={
            residences :[{
                value: '1',
                label: '卧室床品',
                children: [{
                    value: '花鸟',
                    label: '花鸟系列',
                },{
                    value: '老粗布',
                    label: '老粗布系列',
                },{
                    value: '婚庆',
                    label: '婚庆系列',
                },{
                    value: '件套',
                    label: '件套',
                },{
                    value: '床单',
                    label: '床单/床笠',
                },{
                    value: '被罩',
                    label: '被罩',
                }],
            }, {
                value: '2',
                label: '冠军毛巾',
                children: [{
                    value: '毛巾',
                    label: '毛巾',
                },{
                    value: '方巾',
                    label: '方巾',
                },{
                    value: '浴巾',
                    label: '浴巾/浴袍',
                }],
            }, {
                value: '3',
                label: '女装',
                children: [{
                    value: '家居服',
                    label: '家居服',
                },{
                    value: 'T恤',
                    label: 'T恤/背心',
                },{
                    value: '裤子',
                    label: '裤子',
                },{
                    value: '裙子',
                    label: '裙子',
                },{
                    value: '保暖',
                    label: '保暖内衣',
                }],
            }, {
                value: '4',
                label: '男装',
                children: [{
                    value: '家具服',
                    label: '家具服',
                },{
                    value: 'T恤',
                    label: '男T恤',
                },{
                    value: '衬衫',
                    label: '衬衫',
                },{
                    value: '内裤',
                    label: '内裤',
                }],
            }, {
                value: '5',
                label: '日用品',
                children: [{
                    value: '抽纸',
                    label: '抽纸',
                },{
                    value: '围裙',
                    label: '围裙',
                }],
            }, {
                value: '6',
                label: '洗涤用品',
                children: [{
                  value: '氧力多',
                  label: '氧利多',
                }],
            }, {
                value: '7',
                label: '包袋',
                children: [{
                    value: '零钱包',
                    label: '零钱包',
                },{
                    value: '购物包',
                    label: '购物包',
                },{
                    value: '杂物包',
                    label: '杂物包',
                }],
            }]
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
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.axios.post('http://47.102.102.242:1014/setting/insertGoods', {
                    name:values.name,
                    url:values.url,
                    price:values.price,
                    num:values.goodsType[0],
                    type:values.goodsType[1],
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
    
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
                <Form.Item label="商品名称">
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Please input your name!' }],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item label="商品价格">
                    {getFieldDecorator('price', {
                        rules: [{ required: true, message: 'Please input your price!' }],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item label="商品图片">
                    {getFieldDecorator('url', {
                        initialValue:"https://p2.dapuimg.com/public/images/59/b0/90/29aac585e8b756d74831dde6eaec5034.jpg?1550123998#h",
                        rules: [{ required: true, message: 'Please input your url!' }],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item
                    label="商品分类"
                    >
                    {getFieldDecorator('goodsType', {
                        initialValue: ['1', '花鸟'],
                        rules: [{ type: 'array', required: true, message: 'Please select your habitual num!' }],
                    })(
                        <Cascader options={this.state.residences} />
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

AddGoods = withAxios(AddGoods);
export default Form.create()(AddGoods); 