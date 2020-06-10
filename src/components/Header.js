import React from 'react';
import PropTypes from 'prop-types';
import storage from 'redux-persist/lib/storage';
import './Header.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPowerOff} from "@fortawesome/free-solid-svg-icons";

const Header = props => {

    const logOut = () => {
        const url = 'https://www.spotify.com/logout/';
        const spotifyLogoutWindow = window.open(url, 'Spotify Logout', 'width=700,height=500,top=40,left=40');
        setTimeout(() => spotifyLogoutWindow.close(), 2000);
        props.userLogout();
        storage.removeItem('persist:root')
    }

    return (
        <div className={"d-flex justify-content-center"}>
            <h1 className={"doms-h1"}>&#128190; Save the Mix</h1>

            <button onClick={() => logOut()} className="stm-logout">
                <FontAwesomeIcon icon={faPowerOff}/>
            </button>
        </div>
    );
};

Header.propTypes = {
    userLogout: PropTypes.func.isRequired
};

export default Header;
