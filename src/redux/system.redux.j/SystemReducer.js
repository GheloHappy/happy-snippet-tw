import { SET_NAV_STATE } from "./systemTypes"

const initialState = {
    nav_state: false,
}

const systemReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NAV_STATE:
            return {
                ...state,
                nav_state: action.payload,
            }
        default:
            return state;
    }
}

export default systemReducer;