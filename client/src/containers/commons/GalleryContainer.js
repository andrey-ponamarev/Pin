import React from 'react';
import { connect } from 'react-redux';
import Gallery from '../../components/commons/Gallery';
import { fetchPosts, fetchPostsSuccess, fetchPostsFailure } from '../../actions/posts';

const mapStateToProps = (state) => {
    return {
        postsList: state.posts.postsList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => {
            dispatch(fetchPosts()).then((response) => {
                !response.error ? dispatch(fetchPostsSuccess(response.payload)) : dispatch(fetchPostsFailure(response.payload));
            });
        }
    }
};

const GalleryContainer = connect(mapStateToProps, mapDispatchToProps)(Gallery);

export default GalleryContainer;
