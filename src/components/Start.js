import React from 'react';
import {authEndpoint, clientId, redirectUri, scopes} from "../config/config";

const Start = () => {
    const AUTH_HREF = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

    return (
        <div className={"stm-start"}>
            <div className="stm-start__intro">
                <h1 className="stm-h1">Save the mix</h1>

                <p className="stm-text">Missing the button to save your weekly mixes? Save the mix will help you!</p>

                <p className="stm-info_text">An open source project by <a className="stm-info_link"
                                                                          href="https://www.domthedev.com"
                                                                          target="_blank"
                                                                          rel="noopener noreferrer">Dominik
                    Amrugiewicz</a>. You can find this repository on <a
                    href="https://github.com/dom-the-dev/save-the-mix" target="_blank"
                    rel="noopener noreferrer">GitHub</a>.</p>

                <a className="stm-btn" href={AUTH_HREF}>Login to Spotify</a>
            </div>
        </div>
    );
};

export default Start;
