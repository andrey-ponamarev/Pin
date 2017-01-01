import {
    SET_MARKER,
    SET_ACTIVE_MARKER,
    SET_MAP_REF
} from './actions';

/* Default state */
const markers = [
    {
        position: {
            lat: 49.56028000000001,
            lng: 6.202720099999965
        },
        key: `Taiwan`,
        defaultAnimation: 2
    }
];
const googleMap = null;
const activeMarker = [];
const mapView = {
    zoom: 8,
    center: {
        lat: 49.56028000000001,
        lng: 6.202720099999965
    }
};
/******************************/

const setActiveMarker = (state, newActiveMarker) => Object.assign({}, state, {
        activeMarker: [newActiveMarker]
    });

const setPin = (state, newPin) => Object.assign({}, state, {
        markers: [...state.markers, newPin]
    });

const setMapCenter = (state, center, zoom) => Object.assign({}, state, {
        mapView: {
            zoom,
            center
        }
    });

const setMapReference = (state, googleMap) => Object.assign({}, state, {
    googleMap
});

const map = (state = {
    mapView,
    markers,
    activeMarker,
    googleMap
}, action = {}) => {
    switch (action.type) {
        case SET_MARKER: return setPin(state, action.marker);
        case SET_ACTIVE_MARKER: return setActiveMarker(state, action.marker);
        case SET_MAP_REF: return setMapReference(state, action.googleMap);
        default:
            return state;
    }
};

export default map;
