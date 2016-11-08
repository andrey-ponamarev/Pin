import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import map from './map';

const rootReducer = combineReducers({
    map,
    routing
});

export default rootReducer;
