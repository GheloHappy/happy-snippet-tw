import { IS_SIGNEDIN, SET_USER_DISPLAY_NAME, SET_USER_ID, SET_USER_NAME, SET_USER_SETTINGS } from "./userTypes";

export const isSignedIn = (type) => ({
    type: IS_SIGNEDIN,
    payload:  type 
})

export const setUserName = (type) => ({
    type: SET_USER_NAME,
    payload: type
})

export const setUserSettings = (settings) => ({
    type: SET_USER_SETTINGS,
    payload: settings
})

export const setUserId = (type) => ({
    type: SET_USER_ID,
    payload: type
})

export const setUserDisplayName = (name) => ({
    type: SET_USER_DISPLAY_NAME,
    payload: name
})