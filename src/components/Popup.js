import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faMousePointer, faCheck, faSave} from '@fortawesome/free-solid-svg-icons';
import "./Popup.scss";

const Popup = props => {
    return (
        <div className="stm-popup">
            <div className="container">
                <div className="row min-vh-100 justify-content-md-center">
                    <div className="col-12 col-md-10 my-auto">
                        <div className="stm-popup__modal">
                            <div className="stm-popup__title">FOLLOW THESE STEPS</div>
                            <div className="d-flex flex-wrap">
                                <div className="col-12 col-md-3 text-center stm-popup__step">
                                    <div className="stm-popup__icon">
                                        <FontAwesomeIcon icon={faHeart}/>
                                    </div>
                                    <span className={"doms-text doms-text--small"}>Follow Spotify</span>
                                </div>
                                <div className="col-12 col-md-3 text-center stm-popup__step">
                                    <div className="stm-popup__icon">
                                        <FontAwesomeIcon icon={faMousePointer}/>
                                    </div>
                                    <div className="stm-popup__number">
                                    </div>
                                    <span className={"doms-text doms-text--small"}>Select Playlist</span>
                                </div>
                                <div className="col-12 col-md-3 text-center stm-popup__step">
                                    <div className="stm-popup__icon">
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </div>
                                    <span className={"doms-text doms-text--small"}>Select songs</span>
                                </div>
                                <div className="col-12 col-md-3 text-center stm-popup__step">
                                    <div className="stm-popup__icon">
                                        <FontAwesomeIcon icon={faSave}/>
                                    </div>
                                    <span className={"doms-text doms-text--small"}>Save the mix!</span>
                                </div>
                            </div>
                            <div className="stm-popoup__gotIt">
                                <button className={"dom-btn dom-btn-absolute"} onClick={() => props.hidePopup(false)}>GOT IT!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Popup.propTypes = {
    hidePopup: PropTypes.func.isRequired
};

export default Popup;
