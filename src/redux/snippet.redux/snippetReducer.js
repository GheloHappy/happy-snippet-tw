import { SET_SNIPPET, SET_SNIPPET_LANGUAGE } from "./snippetTypes"


const initialState = {
    code_snippet: "",
    snippet_language: "javascript",
}

const snippetReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SNIPPET:
            return {
                ...state,
                snippet: action.payload,
            }
        case SET_SNIPPET_LANGUAGE:
            return {
                ...state,
                snippet_language: action.payload
            }
        default:
            return state;
    }
}

export default snippetReducer