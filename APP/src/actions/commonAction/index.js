/**
 * Action creator
 */

//  编写常量，用于规范type
//根据路由记录返回上一个路由
export const ROUTER_BACK = 'ROUTER_BACK'
export const GOTO_SEARCH = 'GOTO_SEARCH'



//返回组件触发reducers所需参数
export function back(his){
    return {
        type:ROUTER_BACK,
        payload:his
    }
}
export function goSearch(his){
	return {
        type:GOTO_SEARCH,
        payload:his
    }
}


export default {
    back,
    goSearch
}