import React from 'react';
import {connect} from "react-redux";

const Playlists = props => {

    const handleClick = (id) => {
        props.changePlaylist(id);
        props.selectPlaylist(true);
    }

    const renderPlaylists = () => {
        return (
            <ul className="stm-player__list">
                {props.playlists.map(playlist => {
                    return (
                        <li key={playlist.id}
                            onClick={() => handleClick(playlist.id)}
                            value={playlist.id}
                            className={"stm-player__listItem"}
                        >
                            <div className="stm-player__listItemImage">
                                <img className={"stm-image"} src={playlist.image} width={50} alt={playlist.name}/>
                            </div>
                            <div className="stm-player__listItemContent">
                                <div className={"stm-player__itemContentTop"}>{playlist.name}</div>
                                <div className={"stm-player__itemContentBottom"}>Tracks: {playlist.trackCount}</div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }

    return (
        <>
            {renderPlaylists()}
        </>
    );
};


const mapStateToProps = state => {
    return {
        playlists: state.playlists,
    }
}

export default connect(mapStateToProps)(Playlists);
