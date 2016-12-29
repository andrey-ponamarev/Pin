import { connect } from 'react-redux';
import PostsForm from '../../components/forms/PostForm';
import { reduxForm } from 'redux-form';
import {
    createPost,
    createPostSuccess,
    createPostFailure,
    resetNewPost,
    validatePostFields,
    validatePostFieldsSuccess,
    validatePostFieldsFailure
} from '../../actions/posts';

const mapStateToProps = (state) => {
    return {
        newPost: state.posts.newPost
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (data) => {
            dispatch(createPost(data));
        },
        resetMe: () => {
            dispatch(resetNewPost());
        }
    };
};

export default reduxForm({
    form: 'PostsForm'
})(connect(mapStateToProps, mapDispatchToProps)(PostsForm));
