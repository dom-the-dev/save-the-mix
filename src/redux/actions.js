import api from "../helper/api";

export const isLoading = (state) => {
    return {type: 'IS_LOADING', payload: state}
}
export const setMessage = (state, type) => {
    return {type: 'SET_MESSAGE', payload: {message: state, type: type}}
}

export const setPlaylistTracks = (tracks) => {
    return {type: 'SET_TRACKS', payload: tracks}
}

export const setPlaylists = (tracks) => {
    return {type: 'SET_PLAYLISTS', payload: tracks}
}

export const setToken = (token) => {
    return {type: 'SET_TOKEN', payload: token}
}

export const setUser = (user) => {
    return {type: 'SET_USER', payload: user}
}

export const clearPlaylists = () => {
    return {type: 'CLEAR_PLAYLISTS'}
}

export const clearTracks = () => {
    return {type: 'CLEAR_TRACKS'}
}

export const clearToken = () => {
    return {type: 'CLEAR_TOKEN'}
}

export const clearUser = () => {
    return {type: 'CLEAR_USER'}
}


export const userLogout = () => {
    return (dispatch) => {
        dispatch(clearToken());
        dispatch(clearUser());
        dispatch(clearTracks());
        dispatch(clearPlaylists());
        dispatch(setMessage('successfully logged out', 'success'));
    }
}

export const getUser = () => {
    return (dispatch) => {
        dispatch(isLoading(true));
        api.getUser()
            .then(res => {
                dispatch(setUser(res))
            })
            .catch(err => {
                if (err.status === 401) {
                    dispatch(setMessage('PLEASE LOG IN', 'error'))
                    dispatch(setToken(null))
                }
                console.log('getUser error', err);
            })
            .finally(() => {
                dispatch(isLoading(false))
            })
    }
}

export const getPlaylistsBySpotify = (offset) => {
    return (dispatch) => {
        dispatch(isLoading(true));
        api.getUserPlaylists(offset)
            .then(res => {
                if (res.items.length) {
                    let spotifyPlaylists = [];
                    res.items.forEach(item => {
                        if (item.owner.display_name === "Spotify") {
                            console.log(item);
                            spotifyPlaylists.push({
                                name: item.name,
                                id: item.id,
                                description: item.description,
                                image: item.images[0].url
                            });
                        }
                    })
                    dispatch(setPlaylists(spotifyPlaylists))
                    dispatch(getPlaylistsBySpotify(offset + 50))
                }
            })
            .catch(err => {
                if (err.status === 401) {
                    dispatch(setMessage('PLEASE LOG IN'))
                    dispatch(setToken(null))
                }
                console.log('getPlaylistsBySpotify error', err);
            })
            .finally(() => {
                dispatch(isLoading(false))
            })
    }
}

export const getPlaylistTracks = (playlistId) => {
    return (dispatch) => {
        dispatch(isLoading(true));
        api.getPlaylistTracks(playlistId)
            .then(res => {
                // REMOVE TRACKS CONTENT
                let validTracks = res.items.filter(item => item.track !== null);
                validTracks.forEach(track => track.active = true)
                dispatch(setPlaylistTracks(validTracks));
            })
            .catch(err => {
                if (err.status === 401) {
                    dispatch(setMessage('PLEASE LOG IN', 'error'))
                    dispatch(setToken(null))
                }
            })
            .finally(() => {
                dispatch(isLoading(false))
            })
    }
}

export const createPlaylist = (playlistBody, userId, trackUris) => {
    return (dispatch) => {
        dispatch(isLoading(true));
        api.createPlaylist(playlistBody, userId)
            .then(res => {
                api.addTrackToPlaylist(trackUris, res.id)
                    .then(res => {
                        console.log('PLAYLIST CREATED SUCCESSFULLY', res);
                        dispatch(setMessage('PLAYLIST CREATED SUCCESSFULLY', 'success'))
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => {
                if (err.status === 401) {
                    dispatch(setMessage('PLEASE LOG IN', 'error'))
                    dispatch(setToken(null))
                }
            })
            .finally(() => {
                dispatch(isLoading(false))
            })
    }
}

