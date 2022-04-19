import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => {
    return function(dispatch, getState) {
        const promise = jsonPlaceholder.get('/posts');
        //without async..await, we can get promise object – synchronous
    
        return {
            type: 'FETCH_POST',
            payload: promise
        };
    }
};