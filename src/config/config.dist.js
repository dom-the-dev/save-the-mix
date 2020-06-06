export const authEndpoint = "https://accounts.spotify.com/authorize";

// Replace with your app's client ID, redirect URI and desired scopes
export const clientId = "YOUR_CLIENT_ID_HERE";
export const redirectUri = "http://localhost:3000/redirect";
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
