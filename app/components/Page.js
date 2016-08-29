import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Map from './Map';
import Results from './Results';
import { connect } from 'react-redux';

class Page extends Component {
    render() {
        return (
            <Grid>
                <Col xs={8} md={8}>
                    <Row>
                        <Col xs={6} md={6}>
                            <Map/>
                        </Col>
                        <Col xs={6} md={6}>
                            <Results/>
                        </Col>
                    </Row>
                </Col>
            </Grid>
        );
    }
}

Page = connect()(Page);

export default Page;
