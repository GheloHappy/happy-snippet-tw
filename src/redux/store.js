import { combineReducers, createStore } from "redux"
import userReducer from "./user.redux/userReducer";
import snippetReducer from "./snippet.redux/snippetReducer";
import systemReducer from "./system.redux.j/SystemReducer";

const rootReducer = combineReducers({
    user: userReducer,
    snippet: snippetReducer,
    system: systemReducer,
})

const store = createStore(rootReducer);

export default store;