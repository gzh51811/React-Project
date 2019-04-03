import {combineReducers} from 'redux';

import cartReducer from './cartReducer';
import commonReducer from './commonReducer';
import sortReducer from './sortReducer';
//合并Reducer
const rootReducers = combineReducers({
    comon: commonReducer,
    cart: cartReducer,
	sort: sortReducer
});

export default rootReducers;