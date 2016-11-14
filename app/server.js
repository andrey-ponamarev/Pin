require('babel-register')({});
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
//import controllers from './controllers';
import path from 'path';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../app/reducers';
import App from '../app/components/Posts.js';
import webpack from 'webpack';
import { renderToString } from 'react-dom/server';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';

const compiler = webpack(webpackConfig);
const app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('views', './views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/static'));
console.log(__dirname + '/static');

app.use(webpackDevMiddleware(compiler, {
    // app and middleware options
    publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

//  app.get('/user', (req, res) => {
//    res.json({a: 1});
//  });
// We are going to fill these out in the sections to follow
function handleRender(req, res) {
    const store = createStore(rootReducer);

    // Render the component to a string
    const html = renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    );

    // Grab the initial state from our Redux store
    //  const preloadedState = 123;//   store.getState();
    // Send the rendered page back to the client
    res.render('index.jade', {html: html, preloadedState: 444});
}

app.use(handleRender);
export default app;
