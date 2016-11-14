import React, { Component } from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

class Nav extends Component {
    render() {
        return (
            <Link to="/post-page">
                <RaisedButton>
                    Add pin
                </RaisedButton>
            </Link>

        );
    }
}

export default Nav;
