import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import chunk from 'lodash/chunk';

import { connect } from 'react-redux';
import { setActiveMarker } from '../../data/maps/actions';


const mapDispatchToProps = (dispatch) => {
    return {
        onMapClick({latitude, longitude, id}){
            dispatch(setActiveMarker({
                position: {
                    lat: latitude,
                    lng: longitude
                },
                defaultAnimation: 2,
                key: id
            }));
        }
    }
};



class Gallery extends Component {
    onItemClick(){
        console.log(location)
    }

    render() {
        const { images, count, onMapClick } = this.props;
        const gallery = chunk(images, count);

        return (
            <div>
                {gallery.map((chunk, key) => (
                    <div key={key}
                         className="gallery-container">
                        {
                            chunk.map((image, key) => (
                                <Paper
                                    onClick={onMapClick.bind(this, image.location)}
                                    className="gallery-item"
                                    key={key}
                                    style={{ backgroundImage: `url(${image.src})` }}
                                    >
                                </Paper>
                            ))
                        }
                    </div>
                ))}
            </div>
        );
    }
}

const GalleryContainer = connect(null, mapDispatchToProps)(Gallery);

export default GalleryContainer;