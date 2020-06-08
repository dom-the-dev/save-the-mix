const intialState = [];

const playlists = (state = intialState, action) => {
    switch (action.type) {
        case 'SET_PLAYLISTS':
            return state.concat(action.payload);
        case 'CLEAR_PLAYLISTS':
            return intialState;
        default:
            return state;
    }
}

export default playlists;
