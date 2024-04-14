import { IS_SIGNEDIN, SET_USER_NAME } from "./userTypes";

export const isSignedIn = (type) => ({
    type: IS_SIGNEDIN,
    payload:  type 
})

export const setUserName = (type) => ({
    type: SET_USER_NAME,
    payload: type
})