import webpack from 'webpack';
import { renderToString } from 'react-dom/server';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import path from 'path';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//import configureStore from '../client/src/store';
//import App from '../client/src/containers/Root';

///* React */
//app.use(webpackDevMiddleware(compiler, {
//    // server and middleware options
//    publicPath: webpackConfig.output.publicPath
//}));
//
//app.use(webpackHotMiddleware(compiler));

function handleRender(req, res) {
    //const store = configureStore();

    // Render the component to a string
    //const html = renderToString(
    //    <Provider store={store}>
    //        <App />
    //    </Provider>
    //);

    // Grab the initial state from our Redux store
    //  const preloadedState = 123;//   store.getState();
    // Send the rendered page back to the client
    res.render('index.jade', {html: '', preloadedState: 444});
}
/**
 * Created by adreyponamarev on 07/01/17.
 */
