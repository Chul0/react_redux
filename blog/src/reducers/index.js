import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
    posts: postsReducer,
    users: usersReducer
});

//Create a file for each reducer, and import it to this index.js