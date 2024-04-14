import { SET_SNIPPET } from "./snippetTypes";

export const setSnippet = (snippet) => ({
    type: SET_SNIPPET,
    payload: snippet,
});