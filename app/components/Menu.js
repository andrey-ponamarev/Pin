import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Modal from './Modal';

const Menu = ({ isHide, overlayOnClick }) =>
    <Modal side="left"
           visible={isHide}
           overlayOnClick={overlayOnClick}
           contentClass="main-nav pull-left">
        <nav>
            <ul>
                <li><Link id="home-menu" to="/">Live Cams</Link></li>
                <li><Link id="categories-menu" to="/">Categories</Link></li>
                <li><Link id="awards-menu" to="/awards/periodic">Awards</Link></li>
                <li><Link id="favorite-menu" to="/favorite">Favorites</Link></li>
                <li><Link id="messages-menu" to="/chat/performer/0">Messages <span className="badge pull-right">0</span></Link></li>
                <li><Link id="getcredits-menu" to="/get-credits">Get Credits</Link></li>
                <li><Link id="languages" to="/">Languages</Link></li>
                <li><Link id="helpcenter-menu" to="/helpcenter">Help Center</Link></li>
                <li><Link id="terms-menu" to="/terms">Terms &amp; Conditions</Link></li>
            </ul>
        </nav>
    </Modal>;

Menu.propTypes = {
    isHide: PropTypes.bool,
    overlayOnClick: PropTypes.func
};

export default Menu;
