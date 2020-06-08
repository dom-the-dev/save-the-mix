import {combineReducers} from "redux";
import token from "./token";
import user from "./user";
import tracks from "./tracks";
import isLoading from "./is-loading";
import playlists from "./playlists";
import message from "./message";

export default combineReducers({
    token,
    user,
    tracks,
    isLoading,
    message,
    playlists
});
