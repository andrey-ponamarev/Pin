import React, { Component } from 'react';
import PostForm from '../containers/commons/PostFormContainer';
import Gallery from '../containers/commons/GalleryContainer';
import Post from '../components/commons/Post';
import Map from '../components/map/Map';

class BasePage extends Component {
    render() {
        return (
            <div>
                <Map/>
                <PostForm/>
                <Gallery/>
                <Post title="testik" description="test description"/>
            </div>
        );
    }
}

export default BasePage;
