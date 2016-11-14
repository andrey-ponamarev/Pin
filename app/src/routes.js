import React from 'react';
import { Route } from 'react-router';
import BasePage from './pages/BasePage';
import PostPage from './pages/PostPage';


export default (
    <Route path="/" component={BasePage}>
        <Route path="post-page" component={PostPage}/>
    </Route>
);
