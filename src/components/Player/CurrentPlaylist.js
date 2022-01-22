import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

const CurrentPlaylist = ({tracks, handleTracks, setSelectedPlaylist, selectTracks}) => {

    console.log(tracks)

    const renderTracks = () => {
        return (
            <ul className="stm-player__list">
                {tracks.map((track) =>
                    <li className={"stm-player__listItem "}
                        key={track.track.id}
                        onClick={() => handleTracks(track.track.id)}
                    >
                        <div className="stm-player__listItemImage">
                            {track.track.album.images.length ?
                                <img className={"stm-image"} src={track.track.album.images[2].url} width={50}
                                     alt={track.track.name}/> : "no image"}
                        </div>
                        <div className="stm-player__listItemContent">
                            <div className={"stm-player__itemContentTop"}>{track.track.name}</div>
                            <div className={"stm-player__itemContentBottom"}>{track.track.artists[0].name}</div>
                            <div className={"stm-player__check " + (track.active ? "stm-player__check--active" : "")}/>
                        </div>
                    </li>
                )}
            </ul>
        )
    }

    return (
        <>
            <button className={"dom-btn dom-btn-fixed dom-btn-fixed--left"}
                    onClick={() => setSelectedPlaylist(false)}>BACK
            </button>
            <button className={"dom-btn dom-btn-fixed dom-btn-fixed--right"}
                    onClick={() => selectTracks(true)}>NEXT
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

