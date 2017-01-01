import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import BasePage from './pages/BasePage';
import PostPage from './pages/PostPage';
import GalleryPage from './pages/GalleryPage';
import Post from './pages/Post';

export default (
    <Route path="/" component={BasePage}>
        <IndexRedirect to="/add-post" />
        <Route path="search" component={GalleryPage}/>
        <Route path="gallery" component={GalleryPage}/>
        <Route path="add-post" component={PostPage}/>
        <Route path="post/:id" component={Post}/>
    </Route>
);
