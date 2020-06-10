import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faMousePointer, faCheck, faSave} from '@fortawesome/free-solid-svg-icons'

const Popup = props => {
    return (
        <div className="stm-popup__wrapper">
            <div className={"stm-popup__modal"}>
                <div className="container">
                    <div className="row">
                        <div className="stm-popup__step col-12 col-md-3 text-center">
                            <div className="stm-popup__number">
                                <FontAwesomeIcon icon={faHeart}/>
                            </div>
                            1.<br/> Follow Spotify-Playlist
                        </div>
                        <div className="stm-popup__step col-12 col-md-3 text-center">
                            <div className="stm-popup__number">
                                <FontAwesomeIcon icon={faMousePointer}/>
                            </div>
                            2. <br/>Select Playlist
                        </div>
                        <div className="stm-popup__step col-12 col-md-3 text-center">
                            <div className="stm-popup__number">
                                <FontAwesomeIcon icon={faCheck}/>
                            </div>
                            3. <br/>Select/Deselect songs
                        </div>
                        <div className="stm-popup__step col-12 col-md-3 text-center">
                            <div className="stm-popup__number">
                                <FontAwesomeIcon icon={faSave}/>
                            </div>
                            4. <br/>Save the mix!
                        </div>
                        <div className="stm-popup__submit text-center w-100">
                            <button className={"stm-btn"} onClick={() => props.hidePopup(false)}>GOT IT!</button>
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
