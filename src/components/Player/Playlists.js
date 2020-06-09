import React from 'react';
import {connect} from "react-redux";
import './Playlist.css';

const Playlists = props => {

    const handleClick = (id) => {
        props.changePlaylist(id);
        props.selectPlaylist(true);
    }

    const renderPlaylists = () => {
        return (
            <ul>
                {props.playlists.map(playlist => {
                    return (
                        <li key={playlist.id}
                            onClick={() => handleClick(playlist.id)}
                            value={playlist.id}
                            className={"stm-player__listItem"}
                        >
                            <img src={playlist.image} width={50} alt={playlist.name}/>
                            <span>{playlist.name}</span>
                            <span>Tracks: {playlist.trackCount}</span>
                        </li>
                    )
                })}
            </ul>
        )
    }

    return (
        <div className="stm-player__playlists">
            <div className="stm-player__scroll">
                {renderPlaylists()}
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return {
        playlists: state.playlists,
    }
}

export default connect(mapStateToProps)(Playlists);
