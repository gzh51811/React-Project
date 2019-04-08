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
                    value: 'hn',
                    label: '花鸟系列',
                },{
                    value: 'lcb',
                    label: '老粗布系列',
                },{
                    value: 'hq',
                    label: '婚庆系列',
                },{
                    value: 'jt',
                    label: '件套',
                },{
                    value: 'cd',
                    label: '床单/床笠',
                },{
                    value: 'bz',
                    label: '被罩',
                }],
            }, {
                value: '2',
                label: '冠军毛巾',
                children: [{
                    value: 'mj',
                    label: '毛巾',
                },{
                    value: 'fj',
                    label: '方巾',
                },{
                    value: 'yj',
                    label: '浴巾/浴袍',
                }],
            }, {
                value: '3',
                label: '女装',
                children: [{
                    value: 'jjf',
                    label: '家居服',
                },{
                    value: 'tx',
                    label: 'T恤/背心',
                },{
                    value: 'kz',
                    label: '裤子',
                },{
                    value: 'qz',
                    label: '裙子',
                },{
                    value: 'bn',
                    label: '保暖内衣',
                }],
            }, {
                value: '4',
                label: '男装',
                children: [{
                    value: 'jf',
                    label: 'jf',
                },{
                    value: 'ntx',
                    label: '男T恤',
                },{
                    value: 'cs',
                    label: '衬衫',
                },{
                    value: 'nk',
                    label: '内裤',
                }],
            }, {
                value: '5',
                label: '日用品',
                children: [{
                    value: 'cj',
                    label: 'cj',
                },{
                    value: 'qw',
                    label: 'qw',
                }],
            }, {
                value: '6',
                label: '洗涤用品',
                children: [{
                  value: 'yld',
                  label: '氧利多',
                }],
            }, {
                value: '7',
                label: '包袋',
                children: [{
                    value: 'lqb',
                    label: '零钱包',
                },{
                    value: 'gwb',
                    label: '购物包',
                },{
                    value: 'zwb',
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
                        initialValue: ['1', 'hn'],
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