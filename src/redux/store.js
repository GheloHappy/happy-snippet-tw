import { combineReducers, createStore } from "redux"
import userReducer from "./user.redux/userReducer";
import snippetReducer from "./snippet.redux/snippetReducer";

const rootReducer = combineReducers({
    user: userReducer,
    snippet: snippetReducer,
})

const store = createStore(rootReducer);

export default store;