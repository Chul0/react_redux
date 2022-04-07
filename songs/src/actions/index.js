//Action Creator

export const selectSong = song => {
    // Return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
        //don't hardcode the values, just pass them in as arguments.
    };
}
//You will very likley to export multiple action creators, so use `named export` instead of export default.
