import { connect } from 'react-redux';
import Post from '../../components/commons/Post';
import {
    fetchPost,
    fetchPostSuccess,
    fetchPostFailure,
    resetActivePost,
    resetDeletedPost
} from '../../actions/posts';

const mapStateToProps = (state, ownProps) => ({
    activePost: state.posts.activePost,
    postId: ownProps.id
});

const mapDispatchToProps = (dispatch) => ({
    fetchPost: (id) => {
        dispatch(fetchPost(id))
            .then((data) => {
                !data.error ? dispatch(fetchPostSuccess(data.payload)) : dispatch(fetchPostFailure(data.payload));
            });
    },
    resetMe: () => {
        dispatch(resetActivePost());
        dispatch(resetDeletedPost());
    }
});

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);

export default PostContainer;
