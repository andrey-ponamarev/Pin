import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
// import { applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, push } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import Root from './containers/Root';
import './styles/main.scss';

// const middleware = routerMiddleware(browserHistory);
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
    <AppContainer>
        <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
);

window.store = store;
window.pushT = push;

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        const NewRoot = require('./containers/Root').default;
        render(
            <AppContainer>
                <NewRoot store={store} history={history} />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
