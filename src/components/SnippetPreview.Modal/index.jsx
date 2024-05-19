import { RxCross1 } from 'react-icons/rx';
import SyntaxHighlighterComponent from '../CodeSnippet.SyntaxHighlighter';
import { useDispatch, useSelector } from 'react-redux';
import { setSnippet, setSnippetPreview, setSnippetSave, setSnippetView } from '../../redux/snippet.redux/snippetActions';
import { FaClipboard, FaEdit, FaSave } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Loading from '../Loading';
import { postData } from '../../utils/fetcher';
import _ from 'lodash';

const SnippetPreview = () => {
    const today = new Date().toISOString().substring(0, 10);
    const dispatch = useDispatch()
    const isSaving = useSelector((state) => state.snippet.snippet_save)
    const isViewing = useSelector((state) => state.snippet.snippet_view)
    const isPreview = useSelector((state) => state.snippet.snippet_preview)
    const user_id = useSelector((state) => state.user.user_id)
    const snippet_language = useSelector((state) => state.snippet.snippet_language)
    const snippet_code = useSelector((state) => state.snippet.snippet_code)
    const snippet_title = useSelector((state) => state.snippet.snippet_title)
    const [isLoading, setIsLoading] = useState(false)

    const [fields, setFields] = useState({
        date: today,
        user_id: user_id,
        snippet_title: '',
        snippet_language: snippet_language,
        snippet_code: snippet_code,
        is_public: false,
    })

    const handleSave = async () => {
        setIsLoading(true)

        if (!fields.snippet_title) {
            toast.warning("Please input Title.")
            setIsLoading(false)
            return
        }

        if (!fields.snippet_title.length > 50) {
            toast.warning("Title must be lower than 50 characters!")
            setIsLoading(false)
            return
        }

        try {
            const response = await postData('snippet', fields);

            if (response.data.status) {
                dispatch(setSnippet(''))
                Clear(response);
                return
            }

            toast.error(response.data.msg)
        } catch (err) {
            console.log(err)
            toast.error("Internal Server Error :'(")
        }

        setIsLoading(false)
    }

    const handleChanges = e => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === 'checkbox' ? checked : value;

        setFields(prev => ({
            ...prev,
            [name]: fieldValue
        }));
    }

    function Clear(response) {
        toast.success(response.data.msg)
        handleCloseClear()
    }

    const handleCloseClear = () => {
        if (isViewing) {
            dispatch(setSnippet(''))
        }
        setIsLoading(false)
        dispatch(setSnippetSave(false))
        dispatch(setSnippetView(false))
        dispatch(setSnippetPreview(false))
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(snippet_code)
            .then(() => {
                toast.success('Snippet copied to clipboard!');
            })
            .catch((err) => {
                console.error('Failed to copy: ', err);
                toast.error('Failed to copy snippet!');
            });
    }

    return (
        <>
            <div className="w-full h-screen absolute overflow-auto flex flex-col items-center justify-center bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm">
                <div className='w-full h-full p-5 bg-none'>
                    <div className='w-full p-2 bg-gray-100 flex rounded-tl-md rounded-tr-md'>
                        <div className='w-full text-start items-start justify-center flex flex-col pl-2'>
                            <p className='md:text-[2rem] text-[1.3rem] font-semibold'>{isSaving ? "Save Preview" : isViewing ? snippet_title : "Full Screen Preview"}</p>
                        </div>
                        <div className='w-[10%] items-end justify-center flex flex-col'>
                            <button className='text-[1.5rem] text-red-500 font-bold' onClick={
                                handleCloseClear
                            }>
                                <RxCross1 />
                            </button>
                        </div>
                    </div>
                    {isSaving && !isViewing && !isPreview ?
                        <>
                            <div className='w-full p-2 flex items-center bg-slate-100 border'>
                                <label className="font-semibold text-[1rem] mr-2">Title: </label>
                                <input
                                    type="text"
                                    className="w-full sm:w-1/2 md:w-1/4 rounded text-[1rem] font-b p-2 text-black"
                                    placeholder='Enter your title here...'
                                    name="snippet_title"
                                    onChange={handleChanges}
                                    value={fields.snippet_title}
                                />
                            </div>
                            <div className='w-full p-2 flex items-center bg-slate-100 rounded-br-md rounded-bl-md'>
                                <div className='w-1/2'>
                                    <label className='font-semibold'>
                                        <input
                                            type="checkbox"
                                            className="mr-2"
                                            onChange={handleChanges}
                                            name='is_public'
                                        /> Make it public?
                                    </label>
                                </div>
                                <div className='w-1/2 text-end pr-2 flex justify-end'>
                                    <button
                                        className="text-[1.5rem] font-bold border-2 rounded p-2 border-black"
                                        onClick={handleSave}
                                    >
                                        <FaSave />
                                    </button>
                                </div>
                            </div>
                        </>
                        : <></>}
                    {isViewing && !isSaving && !isPreview ?
                        <>
                            <div className='w-full p-2 flex items-center bg-slate-100 rounded-br-md rounded-bl-md'>
                                <div className='w-full flex'>
                                    <div className='w-1/2 items-start justify-start flex'>
                                        <div className='px-3 flex items-center border-2 border-black rounded'>
                                            <button
                                                className="text-[1.5rem] font-bold rounded p-2">
                                                <FaEdit />
                                            </button>
                                            <label> Update Snippet</label>
                                        </div>
                                    </div>
                                    <div className='w-1/2 items-end justify-end flex'>
                                        <div className='px-3 flex items-center border-2 border-black rounded'
                                            onClick={handleCopy}>
                                            <button
                                                className="text-[1.5rem] font-bold rounded p-2">
                                                <FaClipboard />
                                            </button>
                                            <label> Copy Snippet</label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </>
                        : <></>}
                    <SyntaxHighlighterComponent />
                </div>
            </div>
            {isLoading ? <Loading /> : null}
        </>
    )
}

export default SnippetPreview