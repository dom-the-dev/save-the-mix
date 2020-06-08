import React from 'react';
import PropTypes from 'prop-types';
import storage from 'redux-persist/lib/storage';

const Header = props => {

    const logOut = () => {
        const url = 'https://www.spotify.com/logout/';
        const spotifyLogoutWindow = window.open(url, 'Spotify Logout', 'width=700,height=500,top=40,left=40');
        setTimeout(() => spotifyLogoutWindow.close(), 2000);
        props.userLogout();
        storage.removeItem('persist:root')
    }

    return (
        <div className={"stm-header"}>
            <div className="stm-header__content">
                <h1>Save the Mix</h1>

                <div className="stm-header__logout">
                    <button onClick={() => logOut()} className="btn btn--spotify">Logut</button>
                </div>

            </div>
        </div>
    );
};

Header.propTypes = {
    message: PropTypes.string
};

export default Header;
