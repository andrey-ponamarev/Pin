require('babel-register');
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
//import controllers from './controllers';
import path from 'path';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../app/reducers';
import App from '../app/containers/App';
import { renderToString } from 'react-dom/server';

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('views', './views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + 'dist'));

//app.get('/user', (req, res) => {
//    res.json({a: 1});
//});

app.use(handleRender);

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
    const preloadedState = store.getState();

    // Send the rendered page back to the client
    res.send(renderFullPage(html, preloadedState));
}

function renderFullPage(html, preloadedState) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="description" content="Travel instagram google-maps">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script type="text/javascript" src="http://maps.google.com/maps/api/js?key=AIzaSyAxZvDsukjQ29R1Rp41D40pMdUU04U75pE&libraries=places"></script>
         <!--Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
        <!-- Optional theme -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css">
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `;
}

export default app;
