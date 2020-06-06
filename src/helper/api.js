import request from "./request";

const setInitGet = (token) => {
    return {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
}
const setInitPost = (token, body) => {
    return {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(body)
    }
}

const api = {
    getUser: async (token) => {
        return await request('https://api.spotify.com/v1/me', setInitGet(token))
    },

    getUserPlaylists: (token, offset) => {
        return request(`https://api.spotify.com/v1/me/playlists?limit=50&offset=${offset}`, setInitGet(token))
    },

    getPlaylist: (token, playlistId) => {
        return request(`'https://api.spotify.com/v1/playlists/${playlistId}`, setInitGet(token))
    },

    getPlaylistTracks: (token, playlistId) => {
        return request(`https://api.spotify.com/v1/playlists/${playlistId}/tracks/`, setInitGet(token))
    },

    createPlaylist: (token, body, userId) => {
        return request(`https://api.spotify.com/v1/users/${userId}/playlists`, setInitPost(token, body))
    },

    addTrackToPlaylist: (token, body, playlistId) => {
        return request(`https://api.spotify.com/v1/playlists/${playlistId}/tracks?uris=`, setInitPost(token, body))
    }
}

export default api;
