import { SET_SEARCH_ITEM, SET_SNIPPET, SET_SNIPPET_EDITING, SET_SNIPPET_LANGUAGE, SET_SNIPPET_PREVIEW, SET_SNIPPET_SAVE, SET_SNIPPET_TITTLE, SET_SNIPPET_VIEW } from "./snippetTypes";

export const setSnippet = (snippet) => ({
    type: SET_SNIPPET,
    payload: snippet,
});

export const setSnippetLanguage = (language) => ({
    type: SET_SNIPPET_LANGUAGE,
    payload: language,
});

export const setSnippetTittle = (title) => ({
    type: SET_SNIPPET_TITTLE,
    payload: title,
})

export const setSnippetSave = (status) => ({
    type: SET_SNIPPET_SAVE,
    payload: status,
})

export const setSnippetView = (status) => ({
    type: SET_SNIPPET_VIEW,
    payload: status,
})

export const setSnippetPreview = (status) => ({
    type: SET_SNIPPET_PREVIEW,
    payload: status,
})

export const setSnippetEditing= (status) => ({
    type: SET_SNIPPET_EDITING,
    payload: status,
})


export const setSearchItem = (item) => ({
    type: SET_SEARCH_ITEM,
    payload: item
})