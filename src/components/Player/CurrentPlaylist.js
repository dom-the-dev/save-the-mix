import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

const CurrentPlaylist = props => {

    const renderTracks = () => {
        return (
            <div>
                {props.tracks.map((track) =>
                    <div className={"stm-player__track"} key={track.track.id}
                         onClick={() => props.handleTracks(track.track.id)}>
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
                    </div>
                )}
            </div>
        )
    }

    return (
        <div className="stm-player__currentPlaylist col-6 col-md-6 col-lg-3 p-0 order-2 order-lg-2">
            <div className={"stm-player__progress"}>2. Select songs</div>
            <div className="stm-player__scroll">
                {renderTracks()}
            </div>
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

