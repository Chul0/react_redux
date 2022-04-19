import { combineReducers } from "redux";
import postsReducers from "./postsReducers";

export default combineReducers({
    post: postsReducers
});

//Create a file for each reducer, and import it to this index.js