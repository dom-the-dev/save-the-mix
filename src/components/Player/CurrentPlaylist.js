import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

const CurrentPlaylist = props => {

    const renderTracks = () => {
        return (
            <ul>
                {props.tracks.map((track) =>
                    <li className={"stm-player__listItem " + (track.active ? "" : "stm-palyer__listItem--inactive")}
                        key={track.track.id}
                        onClick={() => props.handleTracks(track.track.id)}
                    >
                        <img src={track.track.album.images[2].url} width={50} alt={track.track.name}/>
                        <div className="stm-player__trackInfo">
                            <div className={"stm-player__song"}>
                                <span>{track.track.name}</span>
                            </div>
                            <div className={"stm-player__artist"}>
                                <span>{track.track.artists[0].name}</span>
                            </div>
                        </div>
                        <div className="stm-player__trackSelect">
                            <input type="checkbox" readOnly checked={track.active}/>
                        </div>
                    </li>
                )}
            </ul>
        )
    }

    return (
        <div className="stm-player__playlists">
            <div className="stm-player__scroll">
                {renderTracks()}
            </div>
            <button className={"stm-btn stm-btn--fullWidth"} onClick={() => props.selectTracks(true)}>SELECT</button>
        </div>
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

