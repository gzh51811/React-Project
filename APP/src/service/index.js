//yield等待数据请求
import axios from 'axios';
export function getData(url,params){
    return axios.get(url,{
        params
    })
}