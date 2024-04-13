import { IS_SIGNEDIN, SET_USER_NAME } from "./userTypes";

export const isSignedIn = (status) => ({
    type: IS_SIGNEDIN,
    payload: { status }
})

export const setUserName = (type) => ({
    type: SET_USER_NAME,
    payload: type
})