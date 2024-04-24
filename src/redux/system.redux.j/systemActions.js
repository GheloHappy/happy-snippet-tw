import { SET_NAV_STATE } from "./systemTypes"

export const setNavState = (state) => ({
    type: SET_NAV_STATE,
    payload: state,
})
