import React from 'react';
import PropTypes from 'prop-types';
import FormSaveMix from "../FormSaveMix";

const Player = props => {
    const renderPlaylists = () => {
        return (
            <ul>
                {props.playlists.map(playlist => {
                    return (
                        <li key={playlist.id}
                            onClick={() => props.changePlaylist(playlist.id)}
                            value={playlist.id}>
                            {playlist.name}
                        </li>
                    )
                })}
            </ul>
        )
    }

    const renderTracks = () => {
        return (
            props.tracks.map((track) =>
                <div className={"stm-player__track"} key={track.track.id}>
                    <div className={"stm-player__song"}>
                        <span>{track.track.name}</span>
                    </div>
                    <div className={"stm-player__artist"}>
                        <span>{track.track.artists[0].name}</span>
                    </div>
                </div>
            )
        )
    }

    return (
        <div className={"stm-player col-12"}>
            <div className="row">
                <div className="stm-player__playlists col-3">
                    {props.username ? <span>Hey, {props.username}</span> : null}
                    {renderPlaylists()}
                </div>

                <div className="stm-player__info col-6">
                    <h1>{props.playlist.name}</h1>
                    {props.playlist.description ? <p>{props.playlist.description}</p> : null}
                    {props.playlist.image ? <img alt={props.playlist.name} src={props.playlist.image}/> : null}

                    <FormSaveMix/>

                </div>

                <div className="stm-player__currentPlaylist col-3">
                    Playlist
                    {props.tracks ?
                        renderTracks()
                        : null}
                </div>
            </div>
        </div>
    );
};

Player.propTypes = {};

export default Player;
