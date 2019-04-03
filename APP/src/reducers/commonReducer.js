/**
 * Common Reducer
 * 关于全局的修改规则
 */
import {ROUTER_BACK,GOTO_SEARCH,SERIESARRAY} from '../actions/commonAction'
let initState = {
    SeriesArray : [
				"花语系列",
				"老粗布系列",
				"婚庆系列",
				"件套",
				"床单/床笠",
				"被罩",
				"被芯",
				"枕头",
				"床垫",
				"亚麻/凉席"
			]
}

//修改公共数据，并实时更新挂在组件上？？
let reducer = (state=initState,{type,payload={}})=>{
    switch(type){
        case 'ROUTER_BACK':
//          console.log(payload);
            payload.goBack(-1);
            return state;
        case 'GOTO_SEARCH':
        	payload.push('/search');
        	return state;
        default:
            return state;
    }
}

export default reducer;