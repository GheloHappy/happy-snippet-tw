import { IS_SIGNEDIN, SET_USER_DISPLAY_NAME, SET_USER_ID, SET_USER_NAME, SET_USER_SETTINGS } from "./userTypes"


const initialState = {
    is_signin: false,
    user_name: "",
    user_id: 0,
    user_settings: {
        exist: false,
        dark_mode: false,
        snippet_theme: "coy",
        snippet_line_numbers: false,
        snippet_wrap_lines: false
    },
    user_display_name: '',
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case IS_SIGNEDIN:
            return {
                ...state,
                is_signin: action.payload,

            }
        case SET_USER_NAME:
            return {
                ...state,
                user_name: action.payload
            }
        case SET_USER_ID:
            return {
                ...state,
                user_id: action.payload
            }
        case SET_USER_SETTINGS:
            const updatedSettings = {
                // ...state.user_settings,
                ...action.payload
            };

            localStorage.setItem("user_settings", JSON.stringify(updatedSettings));
            return {
                ...state,
                user_settings: updatedSettings
            }
        case SET_USER_DISPLAY_NAME:
            return {
                ...state,
                user_display_name: payload
            }
        default:
            return state;
    }
}

export default userReducer;