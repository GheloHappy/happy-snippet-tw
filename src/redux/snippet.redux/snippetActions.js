import { SET_SNIPPET, SET_SNIPPET_LANGUAGE, SET_SNIPPET_SAVE } from "./snippetTypes";

export const setSnippet = (snippet) => ({
    type: SET_SNIPPET,
    payload: snippet,
});

export const setSnippetLanguage = (language) => ({
    type: SET_SNIPPET_LANGUAGE,
    payload: language,
});

export const setSnippetSave = (status) => ({
    type: SET_SNIPPET_SAVE,
    payload: status,
})