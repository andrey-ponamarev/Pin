import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { FaSpinner } from 'react-google-maps';
import _ from 'lodash';

import Nav from '../components/commons/Navigation';
import MapContainer from '../containers/maps/MapContainer';

class BasePage extends Component {
    render() {
        return (
            <Grid>
                <Nav/>
                <Row>
                    <Col xs={6} md={6}>
                        <MapContainer/>
                    </Col>
                    <Col xs={6} md={6}>
                        {this.props.children}
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default BasePage;
