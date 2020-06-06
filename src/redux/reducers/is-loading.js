const intialState = false;

const isLoading = (state = intialState, action) => {
    switch (action.type) {
        case 'IS_LOADING':
            return action.payload;
        default:
            return state;
    }
}

export default isLoading;
