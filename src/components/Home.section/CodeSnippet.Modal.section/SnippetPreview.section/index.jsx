import SyntaxHighlighterComponent from '../../CodeSnippet.SyntaxHighlighter.section';

const SnippetPreview = ({setIsPreview }) => {
    return (
        <div className="w-full h-screen absolute overflow-auto flex flex-col items-center justify-center ">
            <div className='w-full p-5 mt-[5rem] bg-none'>
                <button className='text-[1.5rem]' onClick={() => setIsPreview(false)}>X</button>
                <SyntaxHighlighterComponent />
            </div>

            <div className="w-full h-full bg-black opacity-25">

            </div>
        </div>
    )
}

export default SnippetPreview