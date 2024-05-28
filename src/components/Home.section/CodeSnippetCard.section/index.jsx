import { useDispatch } from 'react-redux';
import SyntaxHighlighterComponent from '../../CodeSnippet.SyntaxHighlighter';
import { setSnippetPreview } from '../../../redux/snippet.redux/snippetActions';
import { GrFormView } from 'react-icons/gr';

const CodeSnippetCard = () => {
    const dispatch = useDispatch()
    return (
        <div className='text-start w-full h-full'>
            <div className='flex flex-col items-center justify-center  border p-3 rounded mt-[1rem]'>
                <div className="w-full text-white gap-2 flex flex-col">
                    <div className='w-full flex'>
                        <label className="font-semibold">Preview: </label>
                        
                        <div className='flex w-full text-end justify-end'>
                            <button className='border-white border-[2px] text-[1.2rem] rounded px-2 flex items-center'
                            onClick={() => (dispatch(setSnippetPreview(true)) )}>
                                <GrFormView />
                                View
                            </button>
                        </div>
                    </div>

                    <SyntaxHighlighterComponent />
                </div>
            </div>

        </div>
    )
}

export default CodeSnippetCard