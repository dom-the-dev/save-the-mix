import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import hash from "./helper/hash";
import {connect} from 'react-redux';
import {
    createPlaylist,
    getPlaylistsBySpotify,
    getPlaylistTracks,
    getUser,
    setPlaylistTracks,
    setToken,
    userLogout
} from "./redux/actions";
import Start from "./components/Start";
import Player from "./components/Player/Player";
import Layout from "./components/Layout";

const App = props => {

    const [currentPlaylist, setCurrentPlaylist] = useState(null);

    useEffect(() => {
        if (!props.token) {
            let _token = hash.access_token;
            if (_token) {
                props.setToken(_token);
            }
        }
    }, [])

    useEffect(() => {
        if (props.token) {
            props.getUser();
        }
    }, [props.token])


    useEffect(() => {
        if (props.user && props.user.name) {
            props.getPlaylistsBySpotify()
        }

    }, [props.user])

    useEffect(() => {
        if (props.playlists && props.playlists.length) {
            setCurrentPlaylist(props.playlists[0]);
            props.getPlaylistTracks(props.playlists[0].id)
        }
    }, [props.playlists])

    const handleTracks = (id) => {
        let newTracks = props.tracks;
        newTracks.forEach((track) => {
            if (track.track.id === id) {
                track.active = !track.active
            }
        });
        let x = [...newTracks];
        props.setPlaylistTracks(x);
    }

    const changePlaylist = (id) => {
        let newPlaylist = props.playlists.filter(playlist => playlist.id === id);
        setCurrentPlaylist(newPlaylist[0])
        props.getPlaylistTracks(id)
    }

    if (!props.token) {
        return <Start/>
    }

    return (
        <Layout>
            {props.user && props.tracks && props.tracks.length && currentPlaylist ?
                <Player
                    username={props.user.name}
                    playlist={currentPlaylist}
                    handleTracks={handleTracks}
                    changePlaylist={changePlaylist}
                    playlists={props.playlists}
                />
                : null}
        </Layout>
    );
};

const mapStateToProps = state => {
    return {
        token: state.token,
        user: state.user,
        tracks: state.tracks,
        message: state.message,
        playlists: state.playlists
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
        },
        getPlaylistsBySpotify: () => {
            dispatch(getPlaylistsBySpotify(0))
        },
        getPlaylistTracks: (id) => {
            dispatch(getPlaylistTracks(id))
        },
        setPlaylistTracks: (tracks) => {
            dispatch(setPlaylistTracks(tracks));
        }
    }
}

App.propTypes = {
    token: PropTypes.string,
    message: PropTypes.object,
    setToken: PropTypes.func,
    setPlaylistTracks: PropTypes.func,
    getPlaylistTracks: PropTypes.func,
    getUser: PropTypes.func,
    user: PropTypes.object,
    playlists: PropTypes.array,
    tracks: PropTypes.array
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
