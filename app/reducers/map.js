import * as types from '../actions/types';
const pins = [
    {
        lat: 59.955413,
        lng: 30.337844,
        title: 'A'
    }
];

const mapView = {
    zoom: 11,
    center: {
        lat: 49.56028000000001,
        lng: 6.202720099999965
    }
};

const setPin = (state, newPin) => {
    return Object.assign({}, state, {
        pins: [...state.pins, newPin]
    });
};

const setMapCenter = (state, center, zoom) => {
    return Object.assign({}, state, {
        mapView: {
            zoom,
            center
        }
    });
};

const map = (state = {
    mapView,
    pins
}, action = {}) => {
    switch (action.type) {
        case types.MAP_SET_PIN:
            return setPin(state, action.pin);
        case types.MAP_POSITION:
            return setMapCenter(state, action.center, action.zoom);
        default:
            return state;
    }
};

export default map;
