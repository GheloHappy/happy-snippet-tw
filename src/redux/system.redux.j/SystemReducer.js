import { SET_NAV_STATE, SET_PAGE_NUMBER } from "./systemTypes"

const initialState = {
    nav_state: false,
    page_number: 1,
}

const systemReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NAV_STATE:
            return {
                ...state,
                nav_state: action.payload,
            }
        case SET_PAGE_NUMBER:
            return {
                ...state,
                page_number: action.payload,
            }
        default:
            return state;
    }
}

export default systemReducer;