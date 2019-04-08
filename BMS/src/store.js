import {createStore} from 'redux';

let initState = {
    goodsInfo:[],
    userInfo:[]
}

let reducer = (state=initState,action)=>{
    switch(action.type){
        case 'editgoods':
            return{
                ...state,
                goodsInfo:[action.payload]
            }
        case 'edituser':
            return{
                ...state,
                userInfo:[action.payload]
            }
        default:
            return state;
    }
}

let store = createStore(reducer)

export default store;
