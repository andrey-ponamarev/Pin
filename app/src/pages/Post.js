import React, { Component } from 'react';
import Post from '../containers/commons/PostContainer';

class BasePage extends Component {
    render() {
        return (
            <div>
                <Post id={this.props.params.id}/>
            </div>
        );
    }
}

export default BasePage;
