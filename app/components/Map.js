import React, {PropTypes, Component} from 'react';
import GoogleMap from 'google-map-react';
import Pin from './Pin';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPin } from '../actions/index';

const API_KEY = 'AIzaSyAxZvDsukjQ29R1Rp41D40pMdUU04U75pE';

class Map extends Component {
    constructor(props) {
        super(props);
        this.setPin = this.setPin.bind(this);
    }
    setPin(event) {
        console.log('action: ', event);
        this.props.setPin(event);
    }
    onGoogleApiLoaded() {
        console.log('onGoogleApiLoaded');
    }
    onChange() {
        console.log('onChange', arguments);
    }
    render() {
        console.log('render map');
        return (
            <div id="map-container">
                <GoogleMap
                    onClick={this.setPin}
                    onGoogleApiLoaded={({map, maps}) => console.log(map, maps)}
                    bootstrapURLKeys={{
                        key: API_KEY,
                        language: 'ru'}}
                    center={this.props.mapView.center}
                    zoom={this.props.mapView.zoom}>
                    {this.props.pins.map((pin, index) => <Pin key={index} lat={pin.lat} lng={pin.lng} text={pin.title} /> )}
                </GoogleMap>
            </div>
        );
    }
}

Map.propTypes = {
    pins: PropTypes.array,
    mapView: PropTypes.any,
    setPin: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        pins: state.map.pins,
        mapView: state.map.mapView
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPin: bindActionCreators(setPin, dispatch)
    };
};

Map = connect(mapStateToProps, mapDispatchToProps)(Map);

export default GoogleApiComponent({
    apiKey: API_KEY
})(Map);
