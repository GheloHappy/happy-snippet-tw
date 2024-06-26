import { SET_SEARCH_ITEM, SET_SNIPPET, SET_SNIPPET_EDITING, SET_SNIPPET_ID, SET_SNIPPET_LANGUAGE, SET_SNIPPET_PREVIEW, SET_SNIPPET_PRIVACY, SET_SNIPPET_SAVE, SET_SNIPPET_TITTLE, SET_SNIPPET_VIEW } from "./snippetTypes"


const initialState = {
    snippet_code: "",
    snippet_language: "javascript",
    snippet_title: "",
    snippet_privacy: false,
    snippet_save: false,
    snippet_view: false,
    snippet_preview: false,
    snippet_editing: false,
    snippet_search_item: "",
    snippet_id: 0,
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
        case SET_SNIPPET_PRIVACY:
            return {
                ...state,
                snippet_privacy: action.payload
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
        case SET_SNIPPET_PREVIEW:
            return {
                ...state,
                snippet_preview: action.payload
            }
        case SET_SNIPPET_EDITING:
            return {
                ...state,
                snippet_editing: action.payload
            }
        case SET_SEARCH_ITEM:
            return {
                ...state,
                snippet_search_item: action.payload
            }
        case SET_SNIPPET_ID:
            return {
                ...state,
                snippet_id: action.payload
            }
        default:
            return state;
    }
}

export default snippetReducer