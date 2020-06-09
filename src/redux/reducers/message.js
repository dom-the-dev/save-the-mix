const intialState = null;

const message = (state = intialState, action) => {
    switch (action.type) {
        case 'SET_MESSAGE':
            return {
                message: action.payload.message,
                type: action.payload.type,
            };
        default:
            return state;
    }
}

export default message;
