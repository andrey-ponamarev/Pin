import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import chat from './chat';
import menu from './menu';

const rootReducer = combineReducers({
    chat,
    menu,
    routing
});

export default rootReducer;
