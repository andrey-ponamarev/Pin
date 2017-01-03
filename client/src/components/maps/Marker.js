import { default as React, PropTypes, Component, cloneElement} from 'react';
import ReactDOM from 'react-dom';

class Marker extends Component {
    destroyMarker = this.destroyMarker.bind(this);

    destroyMarker(){
        React.unmountComponentAtNode(ReactDOM.findDOMNode(this).parentNode);
    }

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
        if(!MarkerOptions){
            return this.destroyMarker();
        }

        map.panTo(MarkerOptions.position);
        this.state.marker.setPosition(MarkerOptions.position);
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
