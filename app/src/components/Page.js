import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
// import Results from './Results';
import Gallery from './Gallery';
//  import Map from './Map';
import { connect } from 'react-redux';

class Page extends Component {
    render() {
        return (
            <Grid>
                <Col xs={8} md={8}>
                    <Row>
                        <Col xs={6} md={6}>
                            <Gallery/>
                        </Col>
                    </Row>
                </Col>
            </Grid>
        );
    }
}

Page = connect()(Page);

export default Page;
