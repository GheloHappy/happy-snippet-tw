import { RxCross1 } from 'react-icons/rx';
import SyntaxHighlighterComponent from '../CodeSnippet.SyntaxHighlighter';
import { useDispatch, useSelector } from 'react-redux';
import { setSnippet, setSnippetSave } from '../../redux/snippet.redux/snippetActions';
import { FaSave } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Loading from '../Loading';
import { postData } from '../../utils/fetcher';
import _ from 'lodash';

const SnippetPreview = ({ setIsPreview }) => {
    const today = new Date().toISOString().substring(0, 10);
    const dispatch = useDispatch()
    const isSaving = useSelector((state) => state.snippet.snippet_save)
    const user_id = useSelector((state) => state.user.user_id)
    const snippet_language = useSelector((state) => state.snippet.snippet_language)
    const snippet_code = useSelector((state) => state.snippet.snippet_code)
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
        setIsLoading(false)
        setIsPreview(false)
        dispatch(setSnippetSave(false))
        dispatch(setSnippet(''))
    }

    return (
        <>
            <div className="w-full h-screen absolute overflow-auto flex flex-col items-center justify-center bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm">
                <div className='w-full h-full p-5 bg-none'>
                    <div className='w-full p-2 bg-white flex rounded-tl-md rounded-tr-md'>
                        <div className='w-1/2 text-start items-start justify-center flex flex-col'>
                            <p className='text-[1.1rem] font-semibold'>{isSaving ? "Save Preview" : "Full screen Preview"}</p>
                        </div>
                        <div className='w-1/2 items-end justify-center flex flex-col'>
                            <button className='text-[1.3rem] font-bold' onClick={() => { setIsPreview(false), dispatch(setSnippetSave(false)) }}><RxCross1 /></button>
                        </div>
                    </div>
                    {isSaving ?
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
                    <SyntaxHighlighterComponent />
                </div>
            </div>
            {isLoading ? <Loading /> : null}
        </>
    )
}

export default SnippetPreview