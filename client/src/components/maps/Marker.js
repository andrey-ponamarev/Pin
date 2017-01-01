import { default as React, PropTypes, Component, cloneElement} from 'react';

class Marker extends Component {
    constructor(props) {
        super(props);

        const { map } = props;
        const marker = new google.maps.Marker(Object.assign({},
            props.MarkerOptions,
            {map}
        ));

        map.panTo(marker.getPosition());

        this.state = {
            marker
        };
    }
    componentWillReceiveProps(nextProps){
        const { map, MarkerOptions } = nextProps;
        const { marker } = this.state;

        console.log('marker componentWillReceiveProps', MarkerOptions);
        this.state.marker.setPosition(MarkerOptions.position);
        map.panTo(marker.getPosition());
    }

    componentWillUpdate(){
        console.log('marker componentWillUpdate');
    }

    componentDidMount() {
        console.log('marker componentDidMount');
    }

    componentWillUnMount() {
        this.state.marker.setMap(null);
    }

    render() {
        const {children} = this.props;

        return (
            <div>{children}</div>
        );
    }
}

export default Marker;
