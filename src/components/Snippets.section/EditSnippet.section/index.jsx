import { useDispatch, useSelector } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import languageOptions from '../../Home.section/CodeSnippet.section/Language.options';
import { RxCross1 } from 'react-icons/rx';
import { setSnippet, setSnippetEditing, setSnippetLanguage } from '../../../redux/snippet.redux/snippetActions';
import { GrFormView, GrUpdate } from 'react-icons/gr';

const EditSnippet = () => {
    const dispatch = useDispatch()
    const snippet = useSelector((state) => state.snippet.snippet_code)
    const language = useSelector((state) => state.snippet.snippet_language)

    const handleCloseClear = () => {
        dispatch(setSnippetEditing(false))
        dispatch(setSnippet(''))
        dispatch(setSnippetLanguage('javascript'))
    }

    return (
        <div className="w-full h-screen absolute top-0 bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm p-2 md:p-10">
            <div className="w-full h-full bg-[#1d1d1d]  rounded p-2 text-white">
                <div className='w-full flex'>
                    <div className='w-full md:w-1/2 flex p-2 gap-3 items-center'>
                        <label className="font-semibold text-[1.2rem]">Language: </label>
                        <select
                            className="w-5/6 p-2 rounded text-black"
                            defaultValue={language}
                        >
                            {languageOptions.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className='w-[30%] md:w-full flex items-center justify-end pr-3'>
                        <button className='text-[2rem] text-red-500 font-bold' onClick={handleCloseClear}>
                            <RxCross1 />
                        </button>
                    </div>
                </div>
                <TextareaAutosize
                    className="text-black min-w-full text-nowrap p-2 rounded border-2 border-black"
                    minRows={10}
                    maxRows={30}
                    placeholder="Enter your snippet here..."
                    value={snippet}
                />
                <div className='w-full flex items-center justify-center gap-5 px-2'>
                    {/* <div className='w-1/2 flex flex-col items-start'>
                        <button className='border-white border-[2px] p-2 text-[1.5rem] rounded flex items-center'>
                            <GrFormView />
                            View
                        </button>
                    </div> */}
                    {/* <div className='w-1/2 flex flex-col items-end'> */}
                    <button className='w-full justify-center border-white border-[2px] p-2 text-[1.2rem] rounded flex items-center gap-2'>
                        <GrUpdate />
                        Update
                    </button>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default EditSnippet