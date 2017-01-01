import React from 'react';
import { connect } from 'react-redux';
import { Autocomplete } from '../../components/maps/async';
import { setMarker, setActiveMarker, setMapRef } from '../../data/maps/actions';

const mapStateToProps = (state) => ({
    url: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg',
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
            dispatch(setActiveMarker(data));
        },

        onMapMounted(googleMap){
            console.log('onMapMounted');
        },

        saveMapRef(googleMap){
            dispatch(setMapRef(googleMap));
        }
    }
};

const AutocompleteContainer = connect(mapStateToProps, mapDispatchToProps)(Autocomplete);

export default AutocompleteContainer;
