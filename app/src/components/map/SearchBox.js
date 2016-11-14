import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setMapCenter } from '../../actions/index';
import GoogleApiComponent from 'google-maps-react/dist/GoogleApiComponent';
const API_KEY = 'AIzaSyAxZvDsukjQ29R1Rp41D40pMdUU04U75pE';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.onPlacesChanged = this.onPlacesChanged.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if(this.props.google) {
            return;
        }
        if(nextProps.google) {
            const input = this.refs.search;
            this.searchBox = new nextProps.google.maps.places.SearchBox(input);
            this.searchBox.addListener('places_changed', this.onPlacesChanged);
        }
    }
    componentWillUnmount() {
        this.searchBox.removeListener('places_changed', this.onPlacesChanged);
    }

    onPlacesChanged() {
        const place = this.searchBox.getPlaces()[0];
        this.props.setMapCenter(place.geometry.location.lat(), place.geometry.location.lng());
        this.props.google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());
    }
    render() {
        console.log('search-box', this.props.google);
        return (
            <div>
                <input id="search-input" className="form-control" ref="search" type="text"/>
            </div>
        );
    }
}

SearchBox.propTypes = {
    placeholder: PropTypes.string,
    onPlacesChanged: PropTypes.func,
    setMapCenter: PropTypes.func,
    google: PropTypes.any
};

const mapDispatchToProps = (dispatch) => {
    return {
        setMapCenter: bindActionCreators(setMapCenter, dispatch)
    };
};

SearchBox = connect(null, mapDispatchToProps)(SearchBox);

export default GoogleApiComponent({
    apiKey: API_KEY
})(SearchBox);
