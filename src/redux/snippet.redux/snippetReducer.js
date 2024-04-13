import { SET_SNIPPET } from "./snippetTypes"


const initialState = {
    snippet: "",
}

const snippetReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SNIPPET:
            return {
                ...state,
                snippet: action.payload,
            }
        default:
            return state;
    }
}

export default snippetReducer