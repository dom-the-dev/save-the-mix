const intialState = null;

const weeklyMix = (state = intialState, action) => {
    switch (action.type) {
        case 'SET_WEEKLY_MIX':
            return action.payload;
        case 'SET_PLAYLIST_TRACKS':
            return {
                ...state,
                tracks: action.payload.items
            }
        case 'CLEAR_WEEKLY_MIX':
            return intialState;
        default:
            return state;
    }
}

export default weeklyMix;
