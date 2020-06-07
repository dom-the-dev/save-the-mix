import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import hash from "./helper/hash";
import "./App.css";
import TeaserMixOfTheWeek from "./components/TeaserMixOfTheWeek";
import {connect} from 'react-redux';
import {getUser, setToken, getWeeklyMix, createPlaylist, userLogout} from "./redux/actions";
import Start from "./components/Start";
import Header from "./components/Header";

const App = props => {

    const TODAY = new Date();

    const [makePublic, setMakePublic] = useState(true);
    const [playlistName, setPlaylistName] = useState(`SAVE THE MIX ${TODAY.getMonth()}-${TODAY.getFullYear()}`);

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
            props.getWeeklyMix(0, getWeeklyMixName(props.user.country));
        }

    }, [props.user])

    const getTrackUri = (tracks) => {
        return tracks.map(track => `spotify:track:` + track.track.id)
    }

    const getWeeklyMixName = (language) => {
        switch (language) {
            case 'DE':
                return 'Dein Mix der Woche';
            case 'EN':
                return 'Discover Weekly';
            default:
                return 'Discover Weekly';
        }
    }

    const saveTheMix = () => {
        let playlistBody = {
            name: playlistName,
            public: makePublic,
            collaborative: false,
            description: ''
        }

        let tracksUris = {uris: getTrackUri(props.weeklyMix.tracks)}

        props.createPlaylist(playlistBody, props.user.id, tracksUris)
    }

    if (!props.token) {
        return <Start/>
    }

    return (
        <div className="stm-wrapper">
            <Header userName={props.user.name} message={props.message}/>
            <div className={"stm-app"}>

                {props.user ?
                    <span>{props.user.name}</span>
                    : null
                }


                {props.weeklyMix && props.weeklyMix.tracks && props.weeklyMix.tracks.length ?
                    <>
                        <input value={playlistName} onChange={(e) => setPlaylistName(e.target.value)}
                               type="text"
                               id="playlistName"/>
                        <label htmlFor="playlistName">Name your Playlist: </label>
                        <input onChange={() => setMakePublic(!makePublic)} id="publicPlaylist" type="checkbox"
                               checked={makePublic}/>
                        <label htmlFor="publicPlaylist">Make public?</label>
                        <button className={"btn btn--spotify btn--large"} onClick={() => saveTheMix()}>Save the
                            mix!
                        </button>
                    </>
                    : null
                }

                {props.weeklyMix && props.weeklyMix.tracks && props.weeklyMix.tracks.length ?
                    <TeaserMixOfTheWeek
                        mixOfTheWeek={props.weeklyMix}
                        tracks={props.weeklyMix.tracks}
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
        weeklyMix: state.weeklyMix
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
        getWeeklyMix: (offset, mixName) => {
            dispatch(getWeeklyMix(offset, mixName))
        },
        createPlaylist: (playlistBody, userId, tracksUris) => {
            dispatch(createPlaylist(playlistBody, userId, tracksUris))
        },
        userLogout: () => {
            dispatch(userLogout())
        }
    }
}

App.propTypes = {
    token: PropTypes.string
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
