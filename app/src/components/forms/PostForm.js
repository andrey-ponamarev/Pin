import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui'
import { Field } from 'redux-form';

class PostForm extends Component {
    componentWillMount() {
        console.log(this.props);
        this.props.resetMe();
    }

    render() {
        const { handleSubmit, createPost } = this.props;
        return (
            <form onSubmit={handleSubmit(createPost.bind(this))}>
                <Field
                    name="title"
                    component={TextField}
                    hintText="Title"
                    fullWidth={true}
                    type="text"/>
                <Field
                    component={TextField}
                    hintText="Description"
                    name="desc"
                    fullWidth={true}
                    multiLine={true}
                    rowsMax={4}/>
                <RaisedButton
                    label="Save"
                    type="submit"
                    primary={true}/>
            </form>
        );
    }
}

export default PostForm;
