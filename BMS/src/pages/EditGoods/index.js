import React, { Component } from 'react';
import {
    Form, Input, Button,Cascader
} from 'antd';
import withAxios from '../../hoc/withAxios';
import store from '../../store';  


class EditGoods extends Component {
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
            }],
            goodsInfo : []
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log(values);
                this.props.axios.post('http://47.102.102.242:1014/setting/updateGoods', {
                    _id:values._id,
                    name:values.name,
                    url:values.url,
                    price:values.price,
                    num:values.goodsType[0],
                    type:values.goodsType[1],
                }).then((response)=> {
                    if(response.status===200){
                        alert('修改成功')
                        this.props.history.push({pathname: '/home'})
                    }else{
                        alert('修改失败')
                    }
                });
            }
        });
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
        if(!id||store.getState().goodsInfo.length<=0){
            this.props.history.push({pathname: '/app/home'})
        }
        //获取当前商品数据
        this.setState({
            goodsInfo:store.getState().goodsInfo[0]
        })
    }


    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
                <Form.Item label="商品名称">
                    {getFieldDecorator('name', {
                        initialValue:this.state.goodsInfo.record?this.state.goodsInfo.record.name:'',
                        rules: [{ required: true, message: 'Please input your name!' }],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item label="商品价格">
                    {getFieldDecorator('price', {
                        initialValue:this.state.goodsInfo.record?this.state.goodsInfo.record.price:'',
                        rules: [{ required: true, message: 'Please input your price!' }],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item label="商品图片">
                    {getFieldDecorator('url', {
                        initialValue:this.state.goodsInfo.record?this.state.goodsInfo.record.url:'',
                        rules: [{ required: true, message: 'Please input your url!' }],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item
                    label="商品分类"
                    >
                    {getFieldDecorator('goodsType', {
                        initialValue: [
                            this.state.goodsInfo.record?this.state.goodsInfo.record.num:'',
                            this.state.goodsInfo.record?this.state.goodsInfo.record.type:''
                        ],
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


EditGoods = withAxios(EditGoods);
export default Form.create()(EditGoods); 