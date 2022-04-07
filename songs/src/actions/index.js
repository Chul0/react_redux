//Action Creator

export const selectSong = song => {
    // Return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
}
//You will very likley to export multiple action creators, so use `named export` instead of export default.
