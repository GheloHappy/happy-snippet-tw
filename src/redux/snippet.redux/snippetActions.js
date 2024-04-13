import { SET_SNIPPET } from "./snippetTypes";

export const setSnippet = (type) => ({
    type: SET_SNIPPET,
    payload: type,
})