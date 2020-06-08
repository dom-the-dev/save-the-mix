const intialState = null;

const tracks = (state = intialState, action) => {
    switch (action.type) {
        case 'SET_TRACKS':
            return action.payload;
        case 'CLEAR_TRACKS':
            return intialState;
        default:
            return state;
    }
}

export default tracks;
