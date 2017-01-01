import React from 'react';
import loadScript from '../utils/LoadScript';

import MapElement from '../Map';
import AutocompleteElement from '../places/Autocomplete';

const Map = loadScript(props => {
    console.log('loadScript', props);
    return (<MapElement {...props}/>)
});
const Autocomplete = loadScript(props=>(<AutocompleteElement {...props}/>));

export default {
    Map,
    Autocomplete
};
