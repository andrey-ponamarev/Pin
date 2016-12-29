import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import map from './map';
import posts from './posts';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    map,
    routing,
    form: formReducer,
    posts

});

export default rootReducer;
