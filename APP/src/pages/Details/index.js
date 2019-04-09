/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Tabs, Button, Carousel, Row, Col, Icon } from 'antd';
import withAxios from "../../hoc/withAxios";
import './index.css';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import cartAction from "../../actions/cartAction";
import commonReducer from "../../actions/commonReducer";
const TabPane = Tabs.TabPane;

function callback(key) {
    // console.log(key);
}

class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            goods: [],
            review: []
        }
    }

    componentWillMount() {
        let { hideMenus, axios, initCart } = this.props;
        hideMenus();
        this.getData();
        this.getReview();

        let username = localStorage.getItem("username");
        if (username) {
            axios
                .post("http://47.102.102.242:1014/setting/findCart", {
                    username: username
                })
                .then(res => {
                    console.log("res", res.data);
                    initCart(res.data);
                });
        }
    }

    async getData() {

        var params = this.props.location.pathname;
        var param = params.substr(9);
        // console.log(this.props)
        let {
            data
        } = await this.props.axios({
            method: 'post',
            url: '/setting/findGood',
            data: {
                _id: param
            }
        })

        this.setState({
            goods: data[0]
        });
    }

    async getReview() {
        var params = this.props.location.pathname;
        var param = params.substr(9);
        // console.log(param)
        let {
            data
        } = await this.props.axios({
            method: 'post',
            url: '/setting/findView',
            data: {
                _id: param
            }
        });
        this.setState({
            review: data[0]
        });
    }

    insert(goods) {
        let goodslist = this.props.goodslist
        let username = localStorage.getItem("username")
        let { add, changeqty } = this.props
        console.log("goodslist", goodslist)
        // console.log(goods)

        if (username) {
            if (goodslist.length > 0) {
                console.log("goods", goods)
                let a = 0;
                let j = 0;
                for (var i = 0; i < goodslist.length; i++) {
                    console.log("id", goodslist[i].goodsid)
                    if (goods._id === goodslist[i].goodsid) {
                        a = 1;
                        j = i;
                    }
                }
                if (a === 1) {
                    this.updateNum(goodslist[j].goodsid, goodslist[j].qty)
                    changeqty(goodslist[j]._id, goodslist[j].qty * 1 + 1)
                    console.log(2);
                } else {
                    console.log(1)
                    goods.goodsid = goods._id;
                    goods.qty = 1;
                    add(goods);
                    this.addGoods(goods, username);
                }
            } else {
                this.addGoods(goods, username);
                console.log(goods)
                goods.goodsid = goods._id;
                goods.qty = 1;
                add(goods);
            }

        } else {
            alert("请先登录");
            this.props.history.push("/login");
        }
    }

    updateNum(id, qty) {
        let { axios } = this.props;
        let username = localStorage.getItem("username")
        axios
            .post("http://47.102.102.242:1014/setting/updateCart", {
                username: username,
                goodsid: id,
                qty: qty * 1 + 1
            })
            .then(res => {
                console.log("res", res.data);
            });
    }

    addGoods(goods, username) {
        let { axios } = this.props;
        axios
            .post("http://47.102.102.242:1014/setting/insertCart", {
                name: goods.name,
                url: goods.url,
                price: goods.price,
                username: username,
                goodsid: goods._id,
                qty: 1 * 1,
                num: goods.num,
                buy: 0 * 1
            })
            .then(res => {
                console.log("res", res.data);
            });
    }

    tz() {
        this.props.history.push("/cart");
    }

    render() {
        // let state = this.state;
        let goods = this.state.goods;
        let review = this.state.review;
        // console.log(goodsList)
        return <div className="details">
            <div className="details1">
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="产品" key="1">
                        <div className="main">
                            <Carousel autoplay>
                                <div><img src={goods.url}></img></div>
                                <div><img src={goods.url}></img></div>
                                <div><img src={goods.url}></img></div>
                                <div><img src={goods.url}></img></div>
                                <div><img src={goods.url}></img></div>
                            </Carousel>
                            <div className="container">
                                <div>
                                    <h4>{goods.name}</h4>
                                    <h5 className="color1">采用纯棉精梳60支纱和40支纱，300根梭织工艺。面料经过丝光、预缩等处理，面料光泽好，强力高，手感柔软丝滑。</h5>
                                    <p style={{ display: "block" }}>
                                        <span>商品编码：</span>
                                        <span id="product_bn_id">1010201735</span>
                                    </p>
                                    <p>
                                        <span>销售价：</span>
                                        <span id="price_id" className="color2">￥{goods.price}</span>
                                    </p>
                                    <p>
                                        <span>会员价：</span>
                                        <span id="mlvprice">￥{(parseInt(goods.price) * 0.95).toFixed(0)}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="container2">
                                <div>
                                    <span>颜色：</span>
                                    <Button className="btn1">花期</Button>
                                    <Button className="btn1">暮光</Button>
                                </div>
                            </div>
                            <div className="container">
                                <table className="tab1">
                                    <tbody>
                                        <tr>
                                            <td style={{ width: "80px" }}><strong>产品名称</strong></td>
                                            <td>精梳纯棉缎纹花鸟绣花四件套</td>
                                        </tr>
                                        <tr>
                                            <td><strong>产品工艺</strong></td>
                                            <td>纯棉精梳60支纱和40支纱，300根梭织工艺</td>
                                        </tr>
                                        <tr>
                                            <td><strong>产品尺寸</strong></td>
                                            <td>1.5米床  1.8米床</td>
                                        </tr>
                                        <tr>
                                            <td><strong>产品标准</strong></td>
                                            <td>GB/T 22844-2009</td>
                                        </tr>
                                        <tr>
                                            <td><strong>安全类别</strong></td>
                                            <td>GB 18401-2010 A类</td>
                                        </tr>
                                        <tr>
                                            <td><strong>产品等级</strong></td>
                                            <td>合格品</td>
                                        </tr>
                                        <tr>
                                            <td><strong>产品面料</strong></td>
                                            <td>100%棉，60x40/200x95缎纹</td>
                                        </tr>
                                        <tr>
                                            <td><strong>包装规格</strong></td>
                                            <td>印花布袋</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <img src="http://activity.dapuimg.com/1508747036000818.jpg" />
                            </div>
                        </div>
                        <div className="bottom">
                            <Row style={{ height: "50px" }}>
                                <Col span={4}><Icon type="customer-service" /></Col>
                                <Col span={4}><Icon onClick={this.tz.bind(this)} type="shopping-cart" /></Col>
                                <Col span={8}>送心意</Col>
                                <Col span={8} onClick={this.insert.bind(this, goods)}>加入购物车</Col>
                            </Row>
                        </div>
                    </TabPane>
                    <TabPane tab="评论" key="2">
                        <div className="main">
                            <div>
                                <Row>
                                    <Col span={24}>
                                        <Col span={12}>
                                            <img alt="qlzf " src="http://activity.dapuimg.com/mdapu_user_avatar.png" />
                                            <span>{review.username}</span>
                                        </Col>
                                        <Col span={12} className="hpin"><Icon className="support" type="like" />好评{review.support}</Col>
                                    </Col>
                                    <Col className="contant" span={24}>{review.contant}</Col>
                                    <Col span={24} className="sjian">购买时间：{review.datetime}</Col>
                                </Row>
                            </div>
                        </div>
                    </TabPane>
                </Tabs>
            </div>

        </div>
    }
}
Details = connect(
    state => ({
        goodslist: state.cart.goodslist
    }),
    dispatch => bindActionCreators(cartAction, dispatch)
)(Details);
Details = withAxios(Details);
Details = connect(
    state => ({}),
    dispatch => bindActionCreators(commonReducer, dispatch)
)(Details);
export default Details;