const intialState = {};

const user = (state = intialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                name: action.payload.display_name,
                id: action.payload.id,
                country: action.payload.country
            };
        case 'CLEAR_USER':
            return intialState;
        default:
            return state;
    }
}

export default user;
