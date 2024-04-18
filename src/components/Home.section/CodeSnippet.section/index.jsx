import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import languageOptions from './Language.options';


const CodeSnippet = ({setCodeSnippet, setLanguage}) => {
    const [title, setTitle] = useState('');
    const [isPrivate, setIsPrivate] = useState(false);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSnippetChange = (e) => {
        setCodeSnippet(e.target.value)
    };

    const handleCheckboxChange = (e) => {
        setIsPrivate(e.target.checked);
    };

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    const handleSave = () => {
        console.log("Title:", title);
        console.log("Is Private?", isPrivate);
        setTitle('');
        setIsPrivate(false);
    };

    return (
        <div className="text-white mt-[1rem] w-full text-center border p-5 rounded">
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
                    onChange={handleLanguageChange}
                    className="w-1/4 p-2 rounded text-black"
                    value="javascript"
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
            </form>
        </div>
    );
};

export default CodeSnippet;