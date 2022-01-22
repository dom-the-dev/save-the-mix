export const authEndpoint = "https://accounts.spotify.com/authorize";

// Replace with your app's client ID, redirect URI and desired scopes
export const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
export const redirectUri = process.env.REACT_APP_DOMAIN + "/redirect";
export const scopes = [
    "playlist-read-private",
    "user-top-read",
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-library-read",
    "user-follow-read",
    "playlist-modify-private",
    "playlist-modify-public",
    "playlist-read-collaborative",
];
