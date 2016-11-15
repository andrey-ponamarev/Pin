import React from 'react';
import { Route } from 'react-router';
import BasePage from './pages/BasePage';
import PostPage from './pages/PostPage';
import Post from './pages/Post';

export default (
    <Route path="/" component={BasePage}>
        <Route path="post-page" component={PostPage}/>
        <Route path="posts/:id" component={Post} />
    </Route>
);
