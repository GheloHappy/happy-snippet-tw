import { createStore } from "redux"
import userReducer from "./user.redux/userReducer";

const store = createStore(userReducer);

export default store;