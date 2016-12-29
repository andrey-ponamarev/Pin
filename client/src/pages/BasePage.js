import React, { Component } from 'react';
import Nav from '../components/commons/Navigation';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Map from '../components/map/Map';
import SearchBox from '../components/map/SearchBox';

class BasePage extends Component {
    render() {
        return (
            <Grid>
                <Nav/>
                <Row>
                    <Col xs={6} md={6}>
                        <Map/>
                        <SearchBox/>
                    </Col>
                    <Col xs={6} md={6}>{this.props.children}</Col>
                </Row>
            </Grid>
        );
    }
}

export default BasePage;
