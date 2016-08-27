import * as types from './types';

export function setPin({ lat, lng }) {
    return {
        type: types.SET_PIN,
        pin: {
            lat,
            lng,
            title: 'ABS'
        }
    };
}
