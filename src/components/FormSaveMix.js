import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {createPlaylist, getUser, setToken, userLogout} from "../redux/actions";
import {connect} from "react-redux";

const FormSaveMix = props => {
    const TODAY = new Date();
    const [makePublic, setMakePublic] = useState(true);
    const [playlistName, setPlaylistName] = useState(`SAVE THE MIX ${TODAY.getMonth()}-${TODAY.getFullYear()}`);


    const saveTheMix = () => {
        let playlistBody = {
            name: playlistName,
            public: makePublic,
            collaborative: false,
            description: ''
        }

        let tracksUris = {uris: getTrackUri(props.tracks)}

        props.createPlaylist(playlistBody, props.user.id, tracksUris)
    }

    const getTrackUri = (tracks) => {
        return tracks.map(track => `spotify:track:` + track.track.id)
    }

    return (
        <div className={"stm-stm"}>
            <div className={"stm-stm__form"}>
                <label htmlFor="playlistName">Name your Playlist: </label>
                <input value={playlistName} onChange={(e) => setPlaylistName(e.target.value)}
                       type="text"
                       id="playlistName"/>
            </div>

            <div className={"stm-stm__form"}>
                <label htmlFor="publicPlaylist">Make public?</label>
                <input onChange={() => setMakePublic(!makePublic)} id="publicPlaylist" type="checkbox"
                       checked={makePublic}/>
            </div>

            <button className={"stm-btn"} onClick={() => saveTheMix()}>Save the mix!</button>
        </div>
    );
};

FormSaveMix.propTypes = {};

const mapStateToProps = state => {
    return {
        user: state.user,
        tracks: state.tracks,
    }
}


const mapDispatchToProps = dispatch => {
    return {
        setToken: token => {
            dispatch(setToken(token))
        },
        getUser: () => {
            dispatch(getUser())
        },
        createPlaylist: (playlistBody, userId, tracksUris) => {
            dispatch(createPlaylist(playlistBody, userId, tracksUris))
        },
        userLogout: () => {
            dispatch(userLogout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormSaveMix);
