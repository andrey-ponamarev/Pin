import express from 'express';
import React from 'react';
import { RouterContext, match, Router} from 'react-router';
import { renderToString } from '../../node_modules/react-dom/server';
//import AppHandler from "../../shared/components/AppHandler";

const router = express.Router();

router.get('/*', function (req, res) {

    //let content = renderToString(<AppHandler/>);

    res.render('index', { content: '' });
});

export default router;

import React      from 'react';
import { Router } from 'react-router';
import Location   from 'react-router/lib/Location';
import routes     from 'routes';

app.use((req, res) => {
    const location = new Location(req.path, req.query);

    Router.run(routes, location, (err, routeState) => {
        if (err) return console.error(err);

        const InitialComponent = (
            <Router {...routeState} />
        );
        const componentHTML = React.renderToString(InitialComponent);
        const HTML = `...`;

        res.end(HTML);
    });
});
