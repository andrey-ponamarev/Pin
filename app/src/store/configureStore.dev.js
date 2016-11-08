import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

const middleware = routerMiddleware(browserHistory);

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(middleware), DevTools.instrument())
    );

    return store;
}
