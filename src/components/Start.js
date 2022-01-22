import React from 'react';
import {authEndpoint, clientId, redirectUri, scopes} from "../config/config";
import './Start.scss';
import Imprint from "./Imprint";
import PropTypes from 'prop-types';

const Start = (props) => {
    const AUTH_HREF = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

    if(props.showImprint) {
        return <Imprint setShowImprint={props.setShowImprint}/>
    }

    return (
        <div className={"container stm-start"}>
            <p className={"doms-text doms-text--small doms-text--light position-imprint-start"}><button type={"button"} className={"imprint-button"} onClick={() => props.setShowImprint(true)}>Imprint</button></p>
            <div className="row min-vh-100 justify-content-md-center">
                <div className="col-12 col-md-10 my-auto">
                    <h1 className={"doms-h1"}><span role="img" aria-label={"emoji disc"}>&#128190;</span> Save the mix</h1>

                    <p className={"doms-text"}>Never lose a playlist again.<br/>
                        SAVETHEMIX helps you to safe personalized playlists created by Spotify. <br/>
                    </p>

                    <p className={"doms-text doms-text--small doms-text--light"}>An open source project by <a href="https://www.domthedev.com" target="_blank"
                                                    rel="noopener noreferrer">
                        Dom the dev
                    </a>. You can find this repository on <a href="https://github.com/dom-the-dev/save-the-mix"
                                                             target="_blank" rel="noopener noreferrer">GitHub</a>.</p>

                    <a href={AUTH_HREF}><button type={"button"} className={"dom-btn spotify-button"}>Login to Spotify</button></a>
                </div>
            </div>
        </div>
    );
};

Start.propTypes = {
    showImprint: PropTypes.bool,
    setShowImprint: PropTypes.func,
};

export default Start;
