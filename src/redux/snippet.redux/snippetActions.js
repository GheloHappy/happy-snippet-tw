import { SET_SNIPPET, SET_SNIPPET_LANGUAGE } from "./snippetTypes";

export const setSnippet = (snippet) => ({
    type: SET_SNIPPET,
    payload: snippet,
});

export const setSnippetLanguage = (language) => ({
    type: SET_SNIPPET_LANGUAGE,
    payload: language,
});