import React, { Component, PropTypes } from 'react';
import { Map } from 'google-maps-react';
import GoogleApiComponent from 'google-maps-react/dist/GoogleApiComponent';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPin } from '../actions/index';

const API_KEY = 'AIzaSyAxZvDsukjQ29R1Rp41D40pMdUU04U75pE';

export class Container extends Component {
    constructor(props) {
        super(props);
        this.setPin = this.setPin.bind(this);
        this.onReady = this.onReady.bind(this);
        this.loadMap = this.loadMap.bind(this);
    }
    setPin(event) {
        console.log('action: ', event);
        this.props.setPin(event);
    }
    loadMap() {
        console.log('LoadMap');
    }
    onGoogleApiLoaded() {
        console.log('onGoogleApiLoaded');
    }
    onChange() {
        console.log('onChange', arguments);
    }
    onReady() {
        const {google} = this.props;
        console.log(google);
    }
    render() {
        console.log(this.props.center);

        return (
            <div id="map-container">
                <Map google={this.props.google}
                     loadMap={this.loadMap}
                     onReady={this.onReady}
                     onClick={this.setPin}
                     initialCenter={this.props.center}
                     zoom={this.props.zoom}/>
            </div>
        );
    }
}

Container.propTypes = {
    google: PropTypes.any,
    pins: PropTypes.array,
    center: PropTypes.any,
    zoom: PropTypes.any,
    setPin: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        pins: state.map.pins,
        zoom: state.map.mapView.zoom,
        center: state.map.mapView.center
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPin: bindActionCreators(setPin, dispatch)
    };
};

Container = connect(mapStateToProps, mapDispatchToProps)(Container);
export default GoogleApiComponent({
    apiKey: API_KEY
})(Container);
