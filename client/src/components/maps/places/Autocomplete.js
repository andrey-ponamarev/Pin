import { default as React, PropTypes, Component, cloneElement} from 'react';

const INPUT_STYLE = {
    boxSizing: `border-box`,
    MozBoxSizing: `border-box`,
    border: `1px solid transparent`,
    width: `100%`,
    height: `32px`,
    margin: `10px 0`,
    padding: `0 15px`,
    borderRadius: `1px`,
    boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
    fontSize: `14px`,
    outline: `none`,
    textOverflow: `ellipses`
};

class AutoComplete extends Component {
    static defaultProps = {
        WrapperElement: (<div/>),
        InputElement: (
            <input type='text'
                style={INPUT_STYLE}/>
        ),
        AutocompleteOptions: {
            types: ['geocode']
        }
    };

    static propTypes = {
        WrapperElement: PropTypes.node,
        InputElement: PropTypes.node,
        AutocompleteOptions: PropTypes.object
    };

    handleComponentMount = this.handleComponentMount.bind(this);

    handleComponentMount(node) {
        const autocomplete = new google.maps.places.Autocomplete(node, this.props.AutocompleteOptions);
        const { onPlacesChanged } = this.props;

        console.log('handleComponentMount', this.props);

        autocomplete.addListener('place_changed', () => {
            const place = autocomplete.getPlace();


            if(!place.geometry){
                return;
            }

            console.log(autocomplete.getBounds());

            onPlacesChanged({
                position: {
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng(),
                    animation: google.maps.Animation.DROP
                }
            });

        })
    }

    render() {
        const {WrapperElement, InputElement} = this.props;



        return (
            cloneElement(WrapperElement, {},
                cloneElement(InputElement, {
                    ref: this.handleComponentMount
                })
            )
        );
    }
}

export default AutoComplete;
