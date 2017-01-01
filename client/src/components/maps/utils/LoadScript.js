import invariant from 'invariant';
import canUseDOM from 'can-use-dom';
import getDisplayName from 'react-display-name';
import { default as React, PropTypes, Component} from 'react';

const LOAIDNG_STATE_NONE = 'NONE';
const LOAIDNG_STATE_BEGIN = 'BEGIN';
const LOAIDNG_STATE_LOADED = 'LOADED';

function loadScript(WrappedComponent) {
    return class Container extends Component {
        static displayName = `LoadScript(${getDisplayName(WrappedComponent)})`;

        static propTypes = {
            loadingElement: PropTypes.node,
            url: PropTypes.string.isRequired
        };

        static defaultProps = {
            loadingElement: (<div style={{ height: `100%` }}>Loading</div>)
        };

        state = {
            loadingState: LOAIDNG_STATE_NONE
        };

        isUnmounted = false;

        handleLoaded = this.handleLoaded.bind(this);

        handleLoaded() {
            if (this.isUnmounted) {
                return;
            }
            this.setState({
                loadingState: LOAIDNG_STATE_LOADED
            });
        }

        componentWillMount() {
            const { url } = this.props;

            invariant(!!url,
                `Please provide url for loading script`
            );
        }

        componentDidMount() {
            const { loadingState } = this.state;
            const { url } = this.props;

            if (loadingState !== LOAIDNG_STATE_NONE || !canUseDOM) {
                return;
            }

            this.setState({
                loadingState: LOAIDNG_STATE_BEGIN
            });

            const scriptjs = require(`scriptjs`);

            scriptjs(url, this.handleLoaded);
        }

        componentWillUnmount() {
            this.isUnmounted = true;
        }

        render() {
            const { loadingElement, url, ...restProps } = this.props;
            const { loadingState } = this.state;

            console.log('render loadScript', ...restProps);

            if (loadingState === LOAIDNG_STATE_LOADED) {
                return (
                    <WrappedComponent {...restProps}/>
                );
            } else if(!loadingElement) {
                return <div>Loading...</div>;
            } else {
                return loadingElement;
            }
        }
    };
}

export default loadScript;
