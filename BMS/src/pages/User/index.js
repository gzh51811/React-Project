import { Table,Input,Select,Spin} from 'antd';
import React from 'react';
import withAxios from '../../hoc/withAxios';
import store from '../../store';    
const Search = Input.Search;
const Option = Select.Option;


class User extends React.Component {
    constructor(){
        super();
        this.state={ 
            index:'',
            num:'1',
            dataSource : [],
            loading:true,
            columns : [{
                title: '用户ID',
                dataIndex: '_id',
                key: '_id',
            }, {
                title: '用户名称',
                dataIndex: 'username',
                key: 'username',
            }, {
                title: '操作',
                key: 'action',
                render: (record) => (
                    <div style={{color:'#40a9ff',cursor:'pointer',userSelect:'none'}}>
                        <span onClick={this.deleGoods.bind(this,record)} style={{marginRight:'4px'}}>删除</span>
                        <span onClick={this.editGoods.bind(this,record)} style={{marginLeft:'4px'}}>编辑</span>
                    </div>
                ),
            }]
        }
    }

    // 编辑用户
    editGoods(record){
        let id = record._id
        store.dispatch({type:'edituser',payload:{record}})
        // console.log(record)

        this.props.history.push({
            pathname: '/app/edituser/',
            search: '?id=' + id,
            state: {
                id
            }
        })
    }

    // 删除用户
    deleGoods(record){       
        if(window.confirm('是否删除')){
            this.props.axios.post('http://47.102.102.242:1014/setting/del', {
                _id:record._id,
                collection:'users'
            }).then((response)=> {
                if(response.status===200){
                    alert('删除成功')
                    this.renderList()
                }else{
                    alert('删除失败')
                }
            })
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
        this.renderList()
    }

    // 选择分类
    onSelect=(e)=>{
        this.setState({
            num:e
        }, () => {
            this.renderList()
        });
    }

    // 数据获取
    async renderList(){
        let num = this.state.num
        await this.props.axios.post('http://47.102.102.242:1014/setting/findUsers', {
            num
        }).then((response)=> {
            this.setState({
                dataSource:response.data,
                loading:false
            });
        });
    }


    render() {
        return (
            <div className='home'>
                <div className='goodsSelect' style={{ paddingBottom: 20}}>
                    <Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        enterButton
                        style={{ width: 300}}
                    />
                    <Select defaultValue="1" style={{ width: 120,float: "right"}} onChange={this.onSelect}>
                        <Option value="1">卧室床品</Option>
                        <Option value="2">冠军毛巾</Option>
                        <Option value="3">女装</Option>
                        <Option value="4">男装</Option>
                        <Option value="5">日用品</Option>
                        <Option value="6">洗涤用品</Option>
                        <Option value="7">包袋</Option>
                    </Select>
                </div>           
                <div className='goodsList'>
                    <Spin spinning={this.state.loading}>
                        <Table dataSource={this.state.dataSource} columns={this.state.columns} rowKey="_id"/>
                    </Spin>
                </div>
            </div>
        );
    }
}


User = withAxios(User);
export default User;