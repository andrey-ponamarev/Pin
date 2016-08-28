import express from 'express'
import React from 'react'
import ReactDOM from 'react-dom/server'
import AppHandler from '../../client/admin/app';

const router = express.Router();

router.get('/*', (req, res) => {
    let content = ReactDOM.renderToString(<AppHandler/>);

    res.render('index', { content });
});

export default router;