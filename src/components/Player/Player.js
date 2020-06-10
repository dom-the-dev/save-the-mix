import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import CurrentPlaylist from "./CurrentPlaylist";
import Playlists from "./Playlists";
import Info from "./Info";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './Player.scss';

const Player = props => {
    const [selectedPlaylist, setSelectedPlaylist] = useState(false);
    const [selectedTracks, setSelectedTracks] = useState(false);

    return (
        <div className={"stm-player"}>
            <div className={"text-center stm-player__title"}>
                {selectedPlaylist ?
                    selectedTracks ?
                        <>
                            <button onClick={() => setSelectedTracks(false)}>
                                <FontAwesomeIcon icon={faArrowLeft}/>
                            </button>
                            <h2 className="doms-h2">SAVE THE MIX</h2>
                        </>
                        :
                        <>
                            <h2 className="doms-h2">SELECT SONGS</h2>
                        </>
                    :
                    <>
                        <h2 className="doms-h2">SELECT PLAYLIST</h2>
                    </>
                }
            </div>

            {!selectedPlaylist ?
                <Playlists changePlaylist={props.changePlaylist}
                           selectPlaylist={setSelectedPlaylist}
                />
                : null}

            {selectedPlaylist && !selectedTracks ?
                <CurrentPlaylist
                    handleTracks={props.handleTracks}
                    selectTracks={setSelectedTracks}
                    setSelectedPlaylist={setSelectedPlaylist}
                />
                : null}

            {selectedTracks ?
                <Info name={props.playlist.name} description={props.playlist.description}
                      image={props.playlist.image}
                      tracks={props.tracks}/>
                : null}
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

