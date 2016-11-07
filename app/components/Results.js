import React, { PropTypes, Component } from 'react';
import { Button } from 'react-bootstrap';
import Dropzone from 'react-dropzone';

class Result extends Component {
    constructor(props) {
        super(props);
    }

    onDrop(files) {
        fetch('api', {
            method: 'post',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: {
                name: files.name,
                file: files
            }
        })
            .then((data) => {
                console.log('Request succeeded with JSON response', data);
            });
    }

    render() {
        return (
            <div>
                <Button bsStyle="primary"
                        bsSize="large"
                    >
                    Add Location
                </Button>
                <Dropzone onDrop={this.onDrop}>
                    <div>Try dropping some files here, or click to select files to upload.</div>
                </Dropzone>
            </div>
        );
    }
}

Result.propTypes = {
    title: PropTypes.string
};

export default Result;
