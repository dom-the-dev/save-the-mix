import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import hash from "./helper/hash";
import "./App.css";
import {connect} from 'react-redux';
import {
    getUser,
    setToken,
    createPlaylist,
    userLogout,
    getPlaylistsBySpotify,
    getPlaylistTracks
} from "./redux/actions";
import Start from "./components/Start";
import Header from "./components/Header";
import Message from "./components/Message";
import Player from "./components/Player/Player";

const App = props => {

    const [currentPlaylist, setCurrentPlaylist] = useState(null)

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
        if (props.user && props.user.country) {
            props.getPlaylistsBySpotify()
        }

    }, [props.user])

    useEffect(() => {
        if (props.playlists && props.playlists.length) {
            setCurrentPlaylist(props.playlists[0]);
            props.getPlaylistTracks(props.playlists[0].id)
        }
    }, [props.playlists])

    const changePlaylist = (id) => {
        let newPlaylist = props.playlists.filter(playlist => playlist.id === id);
        setCurrentPlaylist(newPlaylist[0])
        props.getPlaylistTracks(id)
    }

    if (!props.token) {
        return <Start/>
    }

    return (
        <div className="stm-app">
            {props.message ? <Message message={props.message} type={"error"}/> : null}

            <Header userLogout={props.userLogout} userName={props.user.name} message={props.message}/>

            <div className={"container mt-5 mb-5"}>
                <div className="row">
                    {props.user && props.tracks && props.tracks.length && currentPlaylist ?
                        <Player
                            username={props.user.name}
                            playlist={currentPlaylist}
                            tracks={props.tracks}
                            changePlaylist={changePlaylist}
                            playlists={props.playlists}
                        />
                        : null}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        token: state.token,
        user: state.user,
        tracks: state.tracks,
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
        }
    }
}

App.propTypes = {
    token: PropTypes.string
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
