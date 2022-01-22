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
import Imprint from "./components/Imprint";

const App = ({
                 token,
                 setToken,
                 getUser,
                 user,
                 getPlaylistsBySpotify,
                 playlists,
                 getPlaylistTracks,
                 tracks,
                 setPlaylistTracks
}) => {

    const [currentPlaylist, setCurrentPlaylist] = useState(null);
    const [showImprint, setShowImprint] = useState(false);

    useEffect(() => {
        if (!token) {
            let _token = hash.access_token;
            if (_token) {
                setToken(_token);
            }
        }
    }, [])

    useEffect(() => {
        if (token) {
            getUser();
        }
    }, [token])


    useEffect(() => {
        if (user && user.name) {
            getPlaylistsBySpotify()
        }

    }, [user])

    useEffect(() => {
        if (playlists && playlists.length) {
            setCurrentPlaylist(playlists[0]);
            getPlaylistTracks(playlists[0].id)
        }
    }, [playlists])

    const handleTracks = (id) => {
        let newTracks = tracks;
        newTracks.forEach((track) => {
            if (track.track.id === id) {
                track.active = !track.active
            }
        });
        let x = [...newTracks];
        setPlaylistTracks(x);
    }

    const changePlaylist = (id) => {
        let newPlaylist = playlists.filter(playlist => playlist.id === id);
        setCurrentPlaylist(newPlaylist[0])
        getPlaylistTracks(id)
    }

    if (showImprint) {
        return <Imprint setShowImprint={setShowImprint}/>
    }

    if (!token) {
        return <Start showImprint={showImprint} setShowImprint={setShowImprint}/>
    }

    return (
        <Layout setShowImprint={setShowImprint}>
            {
                user && tracks && tracks.length && currentPlaylist ?
                    <Player
                        username={user.name}
                        playlist={currentPlaylist}
                        handleTracks={handleTracks}
                        changePlaylist={changePlaylist}
                        playlists={playlists}
                    />

                    : null
            }

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
