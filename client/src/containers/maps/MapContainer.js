import React from 'react';
import { connect } from 'react-redux';
import { Map } from '../../components/maps/async';
import Marker from '../../components/maps/Marker';

import { setMarker, setActiveMarker, setMapRef } from '../../data/maps/actions';

const GoogleMap = ({googleMap, markers, ...restProps }) => {
    return (
        <Map {...restProps}>
            { googleMap ? markers.map((marker, key) => {
                console.log('marker', marker);
                return (
                    <Marker
                        key={key}
                        map={googleMap}
                        MarkerOptions={marker}/>)
            }) : null
            }
        </Map>
    );
};

const mapStateToProps = (state) => ({
    url: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg',
    markers: state.maps.activeMarker,
    googleMap: state.maps.googleMap
});

const mapDispatchToProps = (dispatch) => {
    return {
        onMapClick(data){
            dispatch(setActiveMarker({
                position: data.latLng,
                defaultAnimation: 2,
                key: Date.now()
            }));
        },

        onPlacesChanged: (data) => {
            console.log('onPlacesChanged', data.latLng);
        },

        onMapMounted(googleMap){
            console.log('onMapMounted');
        },

        saveMapRef(googleMap){
            dispatch(setMapRef(googleMap));
        }
    }
};

const MapContainer = connect(mapStateToProps, mapDispatchToProps)(GoogleMap);

export default MapContainer;
