import { combineReducers } from "redux";
import postsReducer from "./postsReducer";

export default combineReducers({
    posts: postsReducer
});

//Create a file for each reducer, and import it to this index.js