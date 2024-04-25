import { RxCross1 } from 'react-icons/rx';
import SyntaxHighlighterComponent from '../../CodeSnippet.SyntaxHighlighter.section';

const SnippetPreview = ({ setIsPreview }) => {
    return (

        <div className="w-full h-screen absolute overflow-auto flex flex-col items-center justify-center bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm">
            <div className='w-full h-full p-5 bg-none'>
                <div className='w-full p-2 bg-white rounded flex'>
                    <div className='w-1/2 text-start items-start justify-center flex flex-col'>
                        <p className='text-[1.1rem] font-semibold'>Full screen Preview</p>
                    </div>
                    <div className='w-1/2 items-end justify-center flex flex-col'>
                        <button className='text-[1.3rem] font-bold' onClick={() => setIsPreview(false)}><RxCross1 /></button>
                    </div>
                </div>
                <SyntaxHighlighterComponent />
            </div>
        </div>
    )
}

export default SnippetPreview