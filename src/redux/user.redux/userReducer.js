import { IS_SIGNEDIN, SET_USER_NAME } from "./userTypes"


const initialState = {
    is_signin: false,
    user_name: "",
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_SIGNEDIN:
            return {
                ...state,
                is_signin: action.payload.status,
            }
        case SET_USER_NAME:
            return {
                ...state,
                user_name: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;