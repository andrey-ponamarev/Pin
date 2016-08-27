import React, { PropTypes } from 'react';
import Menu from './Menu';
import Header from './Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleMenu } from '../actions';

let App = ({children, menuState, toggle}) => {
    return (
        <div>
            <Menu isHide={menuState}
                  overlayOnClick={toggle}/>
            <Header toggle={toggle}
                    isHide={menuState}/>

            { children }
        </div>
    );
};

App.propTypes = {
    all: PropTypes.any,
    page: PropTypes.any,
    children: PropTypes.object,
    menuState: PropTypes.bool,
    toggle: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        menuState: state.menu,
        all: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggle: bindActionCreators(toggleMenu, dispatch)
    };
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
