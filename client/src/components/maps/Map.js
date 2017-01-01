import { default as React, PropTypes, Component, cloneElement} from 'react';

class GoogleMap extends Component {
    static defaultProps = {
        WrapperElement: (<div style={{
                    height: '600px',
                    width: '100%'
                }}></div>),
        MapElement: (<div style={{ height: `100%` }}></div>),
        MapOptions: {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
        },
        markers: [{position: {lat: -34.397, lng: 150.644}}]
    };

    static propTypes = {
        markers: PropTypes.array,
        WrapperElement: PropTypes.node,
        MapElement: PropTypes.node,
        MapOptions: PropTypes.object
    };

    handleComponentMount = this.handleComponentMount.bind(this);

    handleComponentMount(node) {
        const map = new google.maps.Map(node, this.props.MapOptions);

        console.log('install map', this.props);
        this.props.saveMapRef(map);
    }

    render() {
        const {WrapperElement, MapElement, children} = this.props;

        console.log(this.props.children);

        return (
            cloneElement(WrapperElement, {},
                cloneElement(MapElement, {
                    ref: this.handleComponentMount
                }, children)
            )
        );
    }
}

export default GoogleMap;
