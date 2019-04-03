/**
 * sort Reducer
 * 关于全局的修改规则
 */
import {UPDATE_SORT} from '../actions/sortAction'
let initState = {
	//系列详情数组
	SeriesArray : [
				"花鸟系列",
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
		//点击分类标题更新全局分类详情
        case 'UPDATE_SORT':
            return {
				...payload
			};
        default:
            return state;
    }
}

export default reducer;