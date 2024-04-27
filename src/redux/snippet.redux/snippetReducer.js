import { SET_SNIPPET, SET_SNIPPET_LANGUAGE, SET_SNIPPET_SAVE } from "./snippetTypes"


const initialState = {
    snippet_code: "",
    snippet_language: "javascript",
    snippet_save: false,
}

const snippetReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SNIPPET:
            return {
                ...state,
                snippet_code: action.payload,
            }
        case SET_SNIPPET_LANGUAGE:
            return {
                ...state,
                snippet_language: action.payload
            }
        case SET_SNIPPET_SAVE:
            return {
                ...state,
                snippet_save: action.payload
            }
        default:
            return state;
    }
}

export default snippetReducer