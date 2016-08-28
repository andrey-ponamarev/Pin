import * as types from './types';

export function setPin({ lat, lng }) {
    return {
        type: types.MAP_SET_PIN,
        pin: {
            lat,
            lng,
            title: 'A'
        }
    };
}

export function setMapCenter(lat = 39.56028000000001, lng = 6.202720099999965, zoom = 11) {
    return {
        type: types.MAP_POSITION,
        zoom: zoom,
        center: {
            lat,
            lng
        }
    };
}
