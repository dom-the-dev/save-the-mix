import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import CurrentPlaylist from "./CurrentPlaylist";
import Playlists from "./Playlists";
import Info from "./Info";

const Player = props => {
    return (
        <div className={"stm-player col-12"}>
            <div className="row">
                <Playlists changePlaylist={props.changePlaylist}/>

                <CurrentPlaylist
                    handleTracks={props.handleTracks}
                />

                <Info name={props.playlist.name} description={props.playlist.description} image={props.playlist.image}
                      tracks={props.tracks}/>
            </div>
        </div>
    );
};

Player.propTypes = {
    tracks: PropTypes.array.isRequired,
    handleTracks: PropTypes.func.isRequired,
    changePlaylist: PropTypes.func.isRequired,
    playlist: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        tracks: state.tracks,
    }
}

export default connect(mapStateToProps)(Player);

