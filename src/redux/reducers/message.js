const intialState = null;

const message = (state = intialState, action) => {
    switch (action.type) {
        case 'SET_MESSAGE':
            return action.payload;
        default:
            return state;
    }
}

export default message;
