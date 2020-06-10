import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

const CurrentPlaylist = props => {

    const renderTracks = () => {
        return (
            <ul className="stm-player__list">
                {props.tracks.map((track) =>
                    <li className={"stm-player__listItem " + (track.active ? "stm-player__listItem--active" : "")}
                        key={track.track.id}
                        onClick={() => props.handleTracks(track.track.id)}
                    >
                        <div className="stm-player__listItemImage">
                            <img className={"stm-image"} src={track.track.album.images[2].url} width={50}
                                 alt={track.track.name}/>
                        </div>
                        <div className="stm-player__listItemContent">
                            <div className={"stm-player__itemContentTop"}>{track.track.name}</div>
                            <div className={"stm-player__itemContentBottom"}>{track.track.artists[0].name}</div>
                        </div>
                        <input type="checkbox" readOnly checked={track.active}/>
                    </li>
                )}
            </ul>
        )
    }

    return (
        <>
            <button className={"dom-btn dom-btn-fixed dom-btn-fixed--left"}
                    onClick={() => props.setSelectedPlaylist(false)}>BACK
            </button>
            <button className={"dom-btn dom-btn-fixed dom-btn-fixed--right"}
                    onClick={() => props.selectTracks(true)}>NEXT
            </button>
            {renderTracks()}
        </>
    );
};

CurrentPlaylist.propTypes = {
    handleTracks: PropTypes.func.isRequired,
    tracks: PropTypes.array.isRequired
};

const mapStateToProps = state => {
    return {
        tracks: state.tracks,
    }
}

export default connect(mapStateToProps)(CurrentPlaylist);

