import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import DevTools from './DevTools';
import { Router } from 'react-router';
import routes from '../routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from '../styles/themes';

injectTapEventPlugin();

export default class Root extends Component {
    render() {
        const { store, history } = this.props;
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Provider store={store}>
                    <div>
                        <Router history={history} routes={routes}/>
                        <DevTools />
                    </div>
                </Provider>
            </MuiThemeProvider>
        );
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};
