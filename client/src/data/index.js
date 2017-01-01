import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import maps from './maps';
import posts from './posts';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    maps,
    routing,
    form: formReducer,
    posts

});

export default rootReducer;
