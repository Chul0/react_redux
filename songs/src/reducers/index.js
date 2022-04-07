import { combineReducers } from "redux";

// Reducers

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05'},
        { title: 'Macarena', duration: '2:05'},
        { title: 'All Star', duration: '3:15'},
        { title: 'I want it', duration: '1:14'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
    //key is going to be the key that shows up inside the state object.
});