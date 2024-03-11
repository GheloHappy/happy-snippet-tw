import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { dark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import languageOptions from './Language.options';
import CodeSnippetCard from './CodeSnippetCard.section';

const CodeSnippet = () => {
    const [title, setTitle] = useState('');
    const [snippet, setSnippet] = useState('');
    const [isPrivate, setIsPrivate] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('javascript');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSnippetChange = (e) => {
        setSnippet(e.target.value);
    };

    const handleCheckboxChange = (e) => {
        setIsPrivate(e.target.checked);
    };

    const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value);
    };

    const handleSave = () => {
        console.log("Title:", title);
        console.log("Snippet:", snippet);
        console.log("Is Private?", isPrivate);
        console.log("Selected Language:", selectedLanguage);
        setTitle('');
        setSnippet('');
        setIsPrivate(false);
    };

    return (
        <div className="text-white mt-[1rem] w-1/2 text-center border p-5 rounded">
            <form className="flex flex-col gap-5 items-start">
                <label className="font-semibold">Title: </label>
                <input
                    type="text"
                    className="w-1/2 rounded text-[1.1rem] p-2 text-black"
                    placeholder='Enter your title here...'
                    value={title}
                    onChange={handleTitleChange}
                />
                <label className="font-semibold">Snippet: </label>
                <select
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                    className="w-1/4 p-2 rounded text-black"
                >
                    {languageOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>
                <TextareaAutosize
                    className="text-black w-full p-2 rounded"
                    minRows={3}
                    maxRows={10}
                    placeholder='Enter your snippet here...'
                    value={snippet}
                    onChange={handleSnippetChange}
                />
                <div className="flex gap-2">
                    <input
                        type="checkbox"
                        checked={isPrivate}
                        onChange={handleCheckboxChange}
                        className=""
                    />
                    <label>Make it private?</label>
                </div>
                <button
                    className="border-white border-[3px] text-[1.5rem] rounded w-1/6"
                    onClick={handleSave}
                >
                    Save
                </button>
                {/* <CodeSnippetCard language={selectedLanguage} theme={oneLight} snippet={snippet} /> */}
            </form>
        </div>
    );
};

export default CodeSnippet;