import _ from 'lodash';
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async dispatch =>  {
        const response = await jsonPlaceholder.get('/posts');
        
        dispatch({ type: 'FETCH_POSTS', payload: response.data });
         //instead of returning an object, call dispatch and pass object because I'm using redux-thunk
    };


export const fetchUser = id => dispatch => {
    _fetchUser(id, dispatch);
};
//^Since we don't have any variable.. you can omit `return`, move async dispatch right next to function name.
//^Defining a function that is going to return a function

const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data});
});
//_ underscore it's a private function, other deves shouldn't touch it



// export const fetchUser = _.memoize(function(id) {
//     return _.memoize(async function(dispatch) {
//         const response = await jsonPlaceholder.get(`/users/${id}`);

//         dispatch({ type: 'FETCH_USER', payload: response.data})
//     });
// });