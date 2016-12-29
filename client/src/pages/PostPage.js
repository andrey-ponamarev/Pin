import React, { Component } from 'react';
import PostForm from '../containers/commons/PostFormContainer';
import Gallery from '../containers/commons/GalleryContainer';

class BasePage extends Component {
    render() {
        return (
            <div>
                <PostForm/>
                <Gallery/>
            </div>
        );
    }
}

export default BasePage;
