import {combineReducers} from "redux";
import token from "./token";
import user from "./user";
import weeklyMix from "./weeklyMix";
import isLoading from "./is-loading";

export default combineReducers({
    token,
    user,
    weeklyMix,
    isLoading
});
