import { combineReducers } from "redux";
import postReducer from "./postReducer";
import detailsReducer from "./detailsReducer";

const rootReducer = combineReducers({
    posts: postReducer,
    detailsCard: detailsReducer
})

export default rootReducer;