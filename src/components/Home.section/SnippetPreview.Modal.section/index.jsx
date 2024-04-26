import { RxCross1 } from 'react-icons/rx';
import SyntaxHighlighterComponent from '../CodeSnippet.SyntaxHighlighter.section';
import { useDispatch, useSelector } from 'react-redux';
import { setSnippetSave } from '../../../redux/snippet.redux/snippetActions';

const SnippetPreview = ({ setIsPreview }) => {
    const dispatch = useDispatch()
    const isSaving = useSelector((state) => state.snippet.snippet_save)

    return (
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
                            />
                        </div>
                        <div className='w-full p-2 flex items-center bg-slate-100 rounded-br-md rounded-bl-md'>
                            <label className='font-semibold'>
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                /> Make it private?
                            </label>
                        </div>
                    </>
                    : <></>}
                <SyntaxHighlighterComponent />
            </div>
        </div>
    )
}

export default SnippetPreview