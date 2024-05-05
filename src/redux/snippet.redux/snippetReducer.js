import { SET_SNIPPET, SET_SNIPPET_LANGUAGE, SET_SNIPPET_SAVE, SET_SNIPPET_TITTLE, SET_SNIPPET_VIEW } from "./snippetTypes"


const initialState = {
    snippet_code: "",
    snippet_language: "javascript",
    snippet_title: "",
    snippet_save: false,
    snippet_view: false,
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
        case SET_SNIPPET_TITTLE:
            return {
                ...state,
                snippet_title: action.payload
            }
        case SET_SNIPPET_SAVE:
            return {
                ...state,
                snippet_save: action.payload
            }
        case SET_SNIPPET_VIEW:
            return {
                ...state,
                snippet_view: action.payload
            }
        default:
            return state;
    }
}

export default snippetReducer