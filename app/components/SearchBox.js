import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setMapCenter } from '../actions/index';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.onPlacesChanged = this.onPlacesChanged.bind(this);
    }
    componentDidMount() {
        const input = this.refs.search;
        this.searchBox = new google.maps.places.SearchBox(input);
        this.searchBox.addListener('places_changed', this.onPlacesChanged);
    }
    componentWillUnmount() {
        this.searchBox.removeListener('places_changed', this.onPlacesChanged);
    }

    onPlacesChanged() {
        const place = this.searchBox.getPlaces()[0];
        this.props.setMapCenter(place.geometry.location.lat(), place.geometry.location.lng());
    }
    render() {
        return <input id="search-input" className="form-control" ref="search" type="text"/>;
    }
}

SearchBox.propTypes = {
    placeholder: PropTypes.string,
    onPlacesChanged: PropTypes.func,
    setMapCenter: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
    return {
        setMapCenter: bindActionCreators(setMapCenter, dispatch)
    };
};

SearchBox = connect(null, mapDispatchToProps)(SearchBox);

export default SearchBox;
