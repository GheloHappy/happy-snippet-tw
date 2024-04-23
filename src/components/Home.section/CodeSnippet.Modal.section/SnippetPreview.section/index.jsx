import SyntaxHighlighterComponent from '../../CodeSnippet.SyntaxHighlighter.section';

const SnippetPreview = ({ setIsPreview }) => {
    return (

        <div className="w-full h-screen absolute overflow-auto flex flex-col items-center justify-center bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm">
            <div className='w-full h-full p-5 bg-none'>
                <div className='w-full pr-4 bg-white rounded flex'>
                    <div className='w-1/2 text-start items-start justify-center flex flex-col pl-3'>
                        <p className='text-[1.1rem] font-semibold'>Full screen Preview</p>
                    </div>
                    <div className='w-1/2 text-end'>
                        <button className='text-[1.5rem] font-bold' onClick={() => setIsPreview(false)}>X</button>
                    </div>
                </div>
                <SyntaxHighlighterComponent />
            </div>
        </div>
    )
}

export default SnippetPreview