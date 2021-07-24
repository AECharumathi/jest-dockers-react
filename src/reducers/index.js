import { combineReducers } from "redux";
import courses from "./coursesReducers";
import users from "./usersReducers";
import commentList from "./commentReducer";

const allReducer = combineReducers({
    courses,
    users,
    commentList
})

export default allReducer