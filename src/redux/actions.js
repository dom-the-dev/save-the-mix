import api from "../helper/api";

export const isLoading = (state) => {
    return {type: 'IS_LOADING', payload: state}
}
export const setMessage = (state) => {
    return {type: 'SET_MESSAGE', payload: state}
}

export const setWeeklyMix = (weeklyMix) => {
    return {type: 'SET_WEEKLY_MIX', payload: weeklyMix}
}

export const setPlaylistTracks = (tracks) => {
    return {type: 'SET_PLAYLIST_TRACKS', payload: tracks}
}

export const setToken = (token) => {
    return {type: 'SET_TOKEN', payload: token}
}

export const setUser = (user) => {
    return {type: 'SET_USER', payload: user}
}


export const clearWeeklyMix = (weeklyMix) => {
    return {type: 'CLEAR_WEEKLY_MIX', payload: weeklyMix}
}

export const clearToken = (token) => {
    return {type: 'CLEAR_TOKEN', payload: token}
}

export const clearUser = (user) => {
    return {type: 'CLEAR_USER', payload: user}
}


export const userLogout = () => {
    return (dispatch) => {
        dispatch(clearToken());
        dispatch(clearUser());
        dispatch(clearWeeklyMix());
        dispatch(setMessage('successfully logged out'));
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
                    dispatch(setMessage('PLEASE LOG IN'))
                    dispatch(setToken(null))
                }
                console.log('getUser error', err);
            })
            .finally(() => {
                dispatch(isLoading(false))
            })
    }
}

export const getWeeklyMix = (offset, mixName) => {
    return (dispatch) => {
        dispatch(isLoading(true));
        api.getUserPlaylists(offset)
            .then(res => {
                let weeklyMix = res.items.filter(playlist => playlist.name === mixName)[0];
                if (weeklyMix) {
                    dispatch(setWeeklyMix(weeklyMix));
                    dispatch(getPlaylistTracks(weeklyMix.id));
                } else {
                    let newOffset = offset + 50;
                    dispatch(getWeeklyMix(newOffset, mixName));
                }
            })
            .catch(err => {
                if (err.status === 401) {
                    dispatch(setMessage('PLEASE LOG IN'))
                    dispatch(setToken(null))
                }
                console.log('getMixOfTheWeek error', err);
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
                dispatch(setPlaylistTracks(res));
            })
            .catch(err => {
                if (err.status === 401) {
                    dispatch(setMessage('PLEASE LOG IN'))
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
                        dispatch(setMessage('PLAYLIST CREATED SUCCESSFULLY'))
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => {
                if (err.status === 401) {
                    dispatch(setMessage('PLEASE LOG IN'))
                    dispatch(setToken(null))
                }
            })
            .finally(() => {
                dispatch(isLoading(false))
            })
    }
}
