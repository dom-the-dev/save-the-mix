import React, {useState, useEffect} from 'react';
import {authEndpoint, clientId, redirectUri, scopes} from "./config/config";
import hash from "./helper/hash";
import "./App.css";
import api from "./helper/api";
import TeaserMixOfTheWeek from "./components/TeaserMixOfTheWeek";

const App = () => {

    const AUTH_HREF = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
    const TODAY = new Date();
    const [token, setToken] = useState(null);
    const [error, setError] = useState(null);
    const [username, setUsername] = useState(null);
    const [userId, setUserId] = useState(null);
    const [mixOfTheWeek, setMixOfTheWeek] = useState(null);
    const [makePublic, setMakePublic] = useState(true);
    const [playlistName, setPlaylistName] = useState('SAVE THE MIX' + ' ' + TODAY.getMonth() + '-' + TODAY.getFullYear());
    const [tracks, setTracks] = useState(null);
    const [trackUris, setTrackUris] = useState(null);

    const handleTracks = (tracks) => {
        setTracks(tracks);
        let uris = tracks.map(track => `spotify:track:` + track.track.id);
        setTrackUris(uris)
    }

    useEffect(() => {
        let _token = hash.access_token;
        if (_token) {
            setToken(_token)
            api.getUser(_token)
                .then(res => {
                    setUsername(res.display_name);
                    setUserId(res.id);
                    getWeeklyMix(_token, 0, res.country);
                })
                .catch(err => setError(err));
        }
    }, [])

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

        let tracksBody = {uris: trackUris}

        api.createPlaylist(token, playlistBody, userId)
            .then(res => {
                api.addTrackToPlaylist(token, tracksBody, res.id)
                    .then(res => {
                        console.log('tracks added successfully', res);
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => setError(err));
    }


    const getWeeklyMix = (token, offset, language) => {
        let mixName = getWeeklyMixName(language);
        api.getUserPlaylists(token, offset)
            .then(res => {
                let mixOfTheWeek = res.items.filter(playlist => playlist.name === mixName)[0];
                if (mixOfTheWeek) {
                    setMixOfTheWeek(mixOfTheWeek);
                } else {
                    let newOffset = offset + 50;
                    getWeeklyMix(token, newOffset);
                }
            })
            .catch(err => setError(err));
    }

    return (
        <div className="stm">
            {error ? console.log(error) : null}
            <header className="stm__header">
                <h1>Save the mix</h1>
                {!token ? (
                    <a className="btn btn--spotify" href={AUTH_HREF}>Login to Spotify</a>
                ) : null}

                {username ?
                    <h1>Welcome, {username}</h1>
                    : null}

                {mixOfTheWeek && trackUris ?
                    <>
                        <input value={playlistName} onChange={(e) => setPlaylistName(e.target.value)} type="text"
                               id="playlistName"/>
                        <label htmlFor="playlistName">Name your Playlist: </label>
                        <input onChange={() => setMakePublic(!makePublic)} id="publicPlaylist" type="checkbox"
                               checked={makePublic}/>
                        <label htmlFor="publicPlaylist">Make public?</label>
                        <button className={"btn btn--spotify"} onClick={() => saveTheMix()}>Save the mix!</button>
                    </>
                    : null}
                {mixOfTheWeek ?
                    <TeaserMixOfTheWeek
                        mixOfTheWeek={mixOfTheWeek}
                        token={token}
                        tracks={tracks}
                        handleTracks={handleTracks}
                    />
                    : null}
            </header>
        </div>
    );
};

export default App;
