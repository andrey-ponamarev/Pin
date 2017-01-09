import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui'
import { Field } from 'redux-form';
import Dropzone from 'react-dropzone';
import AutocompleteContainer from '../../containers/maps/AutocompleteContainer';
import FileUploadIcon from '../../../../node_modules/material-ui/svg-icons/file/file-upload';
import Paper from 'material-ui/Paper';
import Nav from './Nav';

class PostForm extends Component {
    onDrop = this.onDrop.bind(this);
    state = {};

    componentWillMount() {
        this.props.resetMe();
    }

    onDrop(files) {
        console.log(files);
        //
        this.setState({
            files
        });
    }
    render() {
        const { handleSubmit, createPost } = this.props;
        return (
            <div>
                <Nav/>
            <form onSubmit={handleSubmit(createPost.bind(this))}>
                <AutocompleteContainer/>
                <Paper>
                    <Dropzone onDrop={this.onDrop}
                              style={{
                        margin: '10px 0',
                        width: '100%',
                        height: '300px',
                        border: '1px dashed #ccc',
                        textAlign: 'center',
                        verticalAlign: 'middle',
                        overflow: 'hidden'
                    }}>
                        {this.state.files ?
                            this.state.files.map((file, key) => (
                                    <img key={key}
                                         src={file.preview}
                                         style={{width: '100%'}}/>)
                            ) : (
                            <div style={{
                                marginTop: '60px'
                            }}>
                                <FileUploadIcon/>
                                <p>Drag and drop a file here or click</p>
                            </div>
                        )}
                    </Dropzone>
                </Paper>
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
            </div>
        );
    }
}

export default PostForm;
