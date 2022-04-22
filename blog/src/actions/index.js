import _ from 'lodash';
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async dispatch =>  {
        const response = await jsonPlaceholder.get('/posts');
        
        dispatch({ type: 'FETCH_POSTS', payload: response.data });
         //instead of returning an object, call dispatch and pass object because I'm using redux-thunk
    };


//Solution 1(to multiple requests): memoize 
export const fetchUser = id => dispatch => (_fetchUser(id, dispatch), console.log('i am fetchUSer'));
//^The problem I think is.. this function sill runs 100 times. even though it doesn't make api request.. I would memoize this function too for better performance?


const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data});
    console.log('i am _fetchUSer')
});
//_ underscore means a private function, other deves shouldn't touch it
//CONS: You won't be able to re-fetch this action creator when you need to. you will have to declare another action creator that does re-fetch..



//Solution 2(to multiple requests):


// export const fetchPosts = () => async dispatch =>  {
//     const response = await jsonPlaceholder.get('/posts');

//     dispatch({ type: 'FETCH_POSTS', payload: response.data });
// };

//^Since we don't have any variable.. you can omit `return`, move async dispatch right next to function name.
//^Defining a function that is going to return a function

// export const fetchUser = _.memoize(function(id) {
//     return _.memoize(async function(dispatch) {
//         const response = await jsonPlaceholder.get(`/users/${id}`);

//         dispatch({ type: 'FETCH_USER', payload: response.data})
//     });
// });