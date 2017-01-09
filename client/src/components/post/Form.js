import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui'
import { Field } from 'redux-form';
import Paper from 'material-ui/Paper';
import Nav from './Nav';

import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

class PostForm extends Component {
    render() {
        const {title, image} = this.props;

        return (
            <div>
                <form>
                    <Field
                        component={TextField}
                        hintText="Title"
                        name="title"
                        fullWidth={true}
                        />
                    <Paper>
                        {image ? "Choose photo..." : <img src={image.src} alt={title}/>}
                    </Paper>
                    <RaisedButton
                        label="Save"
                        type="submit"
                        primary={true}/>
                </form>
            </div>
        );
    }
}

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
})(connect(mapStateToProps, mapDispatchToProps)(PostForm));
