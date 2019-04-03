/**
 * Common Reducer
 * 关于全局的修改规则
 */
import {ROUTER_BACK,GOTO_SEARCH,SERIESARRAY} from '../actions/commonAction'
let initState = {
	
}

//修改公共数据，并实时更新挂在组件上？？
let reducer = (state=initState,{type,payload={}})=>{
    switch(type){
		//全局回退
        case 'ROUTER_BACK':
//          console.log(payload);
            payload.goBack(-1);//payload传过来的是history
            return state;
		//全局去搜索页
        case 'GOTO_SEARCH':
        	payload.push('/search');
        	return state;
        default:
            return state;
    }
}

export default reducer;