import React, { Component } from 'react';
import PostForm from '../containers/commons/PostFormContainer';
import Gallery from '../containers/commons/GalleryContainer';
import Map from '../components/map/Map';

class BasePage extends Component {
    render() {
        return (
            <div>
                <Map/>
                <PostForm/>
                <Gallery/>
            </div>
        );
    }
}

export default BasePage;
