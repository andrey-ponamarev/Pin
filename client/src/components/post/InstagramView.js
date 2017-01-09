import React, { Component } from 'react';
import fetch from 'node-fetch';
import RaisedButton from 'material-ui/RaisedButton';
import Nav from './Nav';
import Gallery from './Gallery';


class InstagramForm extends Component {
    state = {
        images: []
    };

    componentDidMount() {
        fetch('http://localhost:8080/api/instagram/user_self_liked')
            .then(res => res.json())
            .then(images => {
                this.setState({images});
            });
    }

    render() {
        const { images } = this.state;

        return (
            <form>
                <Gallery images={images} count={3}/>
                <RaisedButton
                    label="Save"
                    type="submit"
                    primary={true}/>
            </form>
        );
    }
}

export default InstagramForm;
