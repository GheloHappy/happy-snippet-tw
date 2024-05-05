import { SET_NAV_STATE, SET_PAGE_NUMBER } from "./systemTypes"

export const setNavState = (state) => ({
    type: SET_NAV_STATE,
    payload: state,
})

export const setPageNumber = (number) => ({
    type: SET_PAGE_NUMBER,
    payload: number,
})