import React, { Component } from 'react';
import Nav from '../components/commons/Navigation';
import { Grid, Row, Col } from 'react-flexbox-grid';
import SearchBox from '../components/map/SearchBox';
import Map from '../components/map/MapV1';
import { FaSpinner } from "react-google-maps";
import _ from 'lodash';

class BasePage extends Component {
    render() {
        return (
            <Grid>
                <Nav/>
                <Row>
                    <Col xs={6} md={6}>
                        <Map/>
                    </Col>
                    <Col xs={6} md={6}>{this.props.children}</Col>
                </Row>
            </Grid>
        );
    }
}

export default BasePage;
