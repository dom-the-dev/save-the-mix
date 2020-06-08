import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import hash from "./helper/hash";
import "./App.css";
import TeaserMixOfTheWeek from "./components/TeaserMixOfTheWeek";
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
import FormSaveMix from "./components/FormSaveMix";

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


    const renderPlaylists = () => {
        return props.playlists.map(playlist => {
            return (
                <option key={playlist.id}
                        onChange={() => changePlaylist(playlist.id)}
                        value={playlist.id}>{playlist.name}
                </option>
            )
        })
    }

    if (!props.token) {
        return <Start/>
    }

    return (
        <div className="stm-wrapper">

            {props.message ? <Message message={props.message} type={"error"}/> : null}

            <Header userLogout={props.userLogout} userName={props.user.name} message={props.message}/>

            <div className={"stm-app"}>

                {props.user ?
                    <span>Hey, {props.user.name}</span>
                    : null
                }

                <FormSaveMix/>

                <label htmlFor="choosePlaylist">Choose Playlist to save:</label>
                <select name="choosePlaylist" id="choosePlaylist" onChange={(e) => changePlaylist(e.target.value)}>
                    {renderPlaylists()}
                </select>

                {props.tracks && props.tracks.length && currentPlaylist ?
                    <TeaserMixOfTheWeek
                        playlist={currentPlaylist}
                        tracks={props.tracks}
                    />
                    : null}
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
