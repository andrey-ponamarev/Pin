import React, { PropTypes, Component } from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import SearchBox from './SearchBox';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPin } from '../actions/index';
import UploadImage from 'react-dropzone-component';

const componentConfig = {
    iconFiletypes: ['.jpg', '.png', '.gif'],
    showFiletypeIcon: true,
    postUrl: '/uploadHandler'
};

const eventHandlers = {
    addedfile: (file) => {
        console.log(file);
    }
};

class Search extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDropImage = this.onDropImage.bind(this);
    }
    onSubmit(event) {
        event.preventDefault();
        console.log('onSubmit', this.props.pinPosition);
        this.props.setPin(this.props.pinPosition);
    }
    onDropImage(file) {
        console.log(file);
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <FormGroup>
                    <SearchBox/>
                </FormGroup>
                <FormGroup>
                    <FormControl type="text" placeholder="Title"/>
                </FormGroup>
                <UploadImage config={componentConfig}
                             eventHandlers = {eventHandlers}/>
                <Button type="submit" bsStyle="success">Submit</Button>
            </form>
        );
    }
}

Search.propTypes = {
    mapView: PropTypes.any,
    setPin: PropTypes.func,
    pinPosition: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        pinPosition: state.map.mapView.center
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPin: bindActionCreators(setPin, dispatch)
    };
};

Search = connect(mapStateToProps, mapDispatchToProps)(Search);

export default Search;
