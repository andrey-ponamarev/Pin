export const SET_MARKER = 'set_marker';
export const SET_ACTIVE_MARKER = 'set_active_marker';
export const SET_MAP_REF = 'set_map_ref';

export const setMarker = marker => ({
    type: SET_MARKER,
        marker
});

export const setActiveMarker = marker => ({
    type: SET_ACTIVE_MARKER,
    marker
});

export const setMapRef = googleMap => ({
    type: SET_MAP_REF,
    googleMap
});
