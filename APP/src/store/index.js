import {createStore,applyMiddleware,compose} from 'redux';
//引入数据处理逻辑
import rootReducer from '../reducers';
//引入处理数据异步请求
import rootSaga from '../saga';

import {composeWithDevTools} from 'redux-devtools-extension';
//引入saga的中间件生成模块
import createSagaMiddleware from 'redux-saga';

// 1.创建saga中间件
const sagaMiddleware = createSagaMiddleware();

// 合并中间件
let middleware = compose(applyMiddleware(sagaMiddleware),composeWithDevTools());

// 创建一个store，并经过中间件处理
// 2.将 sagaMiddleware 连接至 Store
let store = createStore(rootReducer,middleware);

// 3.运行 Saga配置
sagaMiddleware.run(rootSaga);

export default store;