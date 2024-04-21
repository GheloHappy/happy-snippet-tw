import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import languageOptions from './Language.options';
import { setSnippet } from '../../../redux/snippet.redux/snippetActions';
import { useDispatch, useSelector } from 'react-redux';


const CodeSnippet = ({ setLanguage }) => {
    const [title, setTitle] = useState('');
    const [isPrivate, setIsPrivate] = useState(false);
    const dispatch = useDispatch()
    const snippet = useSelector((state) => state.snippet.snippet)

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSnippetChange = (e) => {
        dispatch(setSnippet(e.target.value))
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
        <div className="text-white mt-[1rem] w-full text-center border p-3 rounded">
            <form className="flex flex-col gap-5">
                {/* <label className="font-semibold">Title: </label>
                <input
                    type="text"
                    className="w-1/2 rounded text-[1.1rem] p-2 text-black"
                    placeholder='Enter your title here...'
                    value={title}
                    onChange={handleTitleChange}
                /> */}
                <div className='w-full flex gap-5'>
                    <label className="font-semibold">Language: </label>
                    <select
                        onChange={handleLanguageChange}
                        className="w-1/3 p-2 rounded text-black"
                        value="javascript"
                    >
                        {languageOptions.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                    <div className='w-full text-end'>
                        <button
                            className="border-white border-[2px] text-[1.2rem] rounded w-1/5"
                            onClick={handleSave}
                        >
                            Save
                        </button>
                    </div>
                </div>

                <TextareaAutosize
                    className="text-black w-full p-2 rounded"
                    minRows={10}
                    maxRows={30}
                    placeholder='Enter your snippet here...'
                    onChange={handleSnippetChange}
                    value={snippet}
                />
                {/* <div className="flex gap-2">
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
                </button> */}
            </form>
        </div>
    );
};

export default CodeSnippet;