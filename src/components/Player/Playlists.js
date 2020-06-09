import React, {useState} from 'react';
import {connect} from "react-redux";

const Playlists = props => {
    const [activePlaylist, setActivePlaylist] = useState(props.playlists[0].id)

    const handleClick = (id) => {
        props.changePlaylist(id);
        setActivePlaylist(id);
    }

    const renderPlaylists = () => {
        return (
            <ul>
                {props.playlists.map(playlist => {
                    return (
                        <li key={playlist.id}
                            className={playlist.id === activePlaylist ? "stm-active" : ""}
                            onClick={() => handleClick(playlist.id)}
                            value={playlist.id}>
                            {playlist.name}
                        </li>
                    )
                })}
            </ul>
        )
    }

    return (
        <div className="stm-player__playlists col-6 col-md-6 col-lg-3 p-0  order-2 order-lg-1">
            <div className={"stm-player__progress"}>1. Select a Playlist</div>
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
