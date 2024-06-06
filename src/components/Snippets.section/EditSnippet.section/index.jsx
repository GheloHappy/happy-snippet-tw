import { useDispatch, useSelector } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import languageOptions from '../../Home.section/CodeSnippet.section/Language.options';
import { RxCross1 } from 'react-icons/rx';
import { setSnippet, setSnippetEditing, setSnippetLanguage } from '../../../redux/snippet.redux/snippetActions';
import { GrUpdate } from 'react-icons/gr';
import { useState, useEffect } from 'react';

const EditSnippet = () => {
    const dispatch = useDispatch();
    const snippet = useSelector((state) => state.snippet.snippet_code);
    const language = useSelector((state) => state.snippet.snippet_language);
    const snippet_title = useSelector((state) => state.snippet.snippet_title);
    const is_public = useSelector((state) => state.snippet.snippet_privacy);

    const [fields, setFields] = useState({
        language: '',
        snippet_title: '',
        is_public: false,
        snippet: ''
    });

    useEffect(() => {
        setFields({
            language: language,
            snippet_title: snippet_title,
            is_public: is_public,
            snippet: snippet,
        });
    }, [language, snippet, snippet_title, is_public]);

    const handleCloseClear = () => {
        dispatch(setSnippetEditing(false));
        dispatch(setSnippet(''));
        dispatch(setSnippetLanguage('javascript'));
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFields(prevFields => ({
            ...prevFields,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    return (
        <div className="w-full h-screen absolute top-0 bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm p-2 md:p-10 rounded">
            <div className="w-full  bg-[#1d1d1d]  rounded p-2 text-white">
                <div className='w-full flex'>
                    <div className='w-full flex items-center justify-end'>
                        <button className='text-[2rem] text-red-500 font-bold' onClick={handleCloseClear}>
                            <RxCross1 />
                        </button>
                    </div>
                </div>
                <div className='w-full p-2 text-[1rem] font-semibold flex items-center md:flex-row flex-col gap-2'>
                    <div className='w-full flex md:flex-row flex-col p-0 md:p-2 items-start md:items-center gap-2'>
                        <label className="font-semibold text-[1.2rem]">Language: </label>
                        <select
                            className="w-5/6 p-2 rounded text-black"
                            name="language"
                            value={fields.language}
                            onChange={handleChange}
                        >
                            {languageOptions.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className='w-full flex md:items-center p-0 md:p-2 md:flex-row flex-col items-start gap-2'>
                        <label className='font-semibold text-[1.2rem]'>Title: </label>
                        <input 
                            type='text' 
                            className='w-full p-2 text-black font-normal rounded' 
                            name="snippet_title"
                            value={fields.snippet_title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='w-full flex items-center justify-start md:justify-end md:pr-2'>
                        <label className='font-semibold cursor-pointer'>
                            <input
                                type="checkbox"
                                className="mr-2"
                                name='is_public'
                                checked={fields.is_public}
                                onChange={handleChange}
                            /> Make it {fields.is_public ? "private" : "public"} ?
                        </label>
                    </div>
                </div>
                <TextareaAutosize
                    className="text-black min-w-full text-nowrap p-2 rounded border-2 border-black"
                    minRows={10}
                    maxRows={30}
                    placeholder="Enter your snippet here..."
                    name="snippet"
                    value={fields.snippet}
                    onChange={handleChange}
                />
                <div className='w-full flex items-center justify-center gap-5 px-2'>
                    <button className='w-full justify-center border-white border-[2px] p-2 text-[1.2rem] rounded flex items-center gap-2'>
                        <GrUpdate />
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditSnippet;
