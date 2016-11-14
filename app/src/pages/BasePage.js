import React, { Component } from 'react';
import Nav from '../components/commons/Navigation';

class BasePage extends Component {
    render() {
        return (
            <div>
                <Nav/>
                {this.props.children}
            </div>
        );
    }
}

export default BasePage;
