export default (state = [], action) => {
    if(action.type === 'FETCH_POSTS') {
        return action.payload;
    }

    return state;
    //if the action 'FETCH_POSTS' is not called, just return the state you have previously.
};


/* Another way with switch statement.
switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
*/