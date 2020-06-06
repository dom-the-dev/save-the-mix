import request from "./request";
import store from "../redux/store";

const setInitGet = () => {
    return {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + store.getState().token
        }
    }
}
const setInitPost = (body) => {
    return {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + store.getState().token
        },
        body: JSON.stringify(body)
    }
}

const api = {
    getUser: async () => {
        return request('https://api.spotify.com/v1/me', setInitGet())
    },

    getUserPlaylists: (offset) => {
        return request(`https://api.spotify.com/v1/me/playlists?limit=50&offset=${offset}`, setInitGet())
    },

    getPlaylist: (playlistId) => {
        return request(`'https://api.spotify.com/v1/playlists/${playlistId}`, setInitGet())
    },

    getPlaylistTracks: (playlistId) => {
        return request(`https://api.spotify.com/v1/playlists/${playlistId}/tracks/`, setInitGet())
    },

    createPlaylist: (body, userId) => {
        return request(`https://api.spotify.com/v1/users/${userId}/playlists`, setInitPost(body))
    },

    addTrackToPlaylist: (body, playlistId) => {
        return request(`https://api.spotify.com/v1/playlists/${playlistId}/tracks?uris=`, setInitPost(body))
    }
}

export default api;
