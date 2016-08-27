import React, { Component, PropTypes } from 'react';

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
        console.log(this.searchBox.getPlaces());
        if (this.props.onPlacesChanged) {
            this.props.onPlacesChanged(this.searchBox.getPlaces());
        }
    }
    render() {
        return <input ref="search" {...this.props} type="text"/>;
    }
}

SearchBox.propTypes = {
    placeholder: PropTypes.string,
    onPlacesChanged: PropTypes.func
};

export default SearchBox;
