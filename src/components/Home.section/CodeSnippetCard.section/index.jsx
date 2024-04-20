import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const CodeSnippetCard = ({ language, theme, snippet, setIsPreview }) => {
    return (
        <div className='text-start w-full h-screen'>
            <div className='flex flex-col items-center justify-center  border p-3 rounded mt-[1rem]'>
                <div className="w-full p-2 text-white">
                    <div className='w-full flex'>
                        <label className="font-semibold">Preview: </label>
                        
                        <div className='w-full text-end'>
                            <button className='border-white border-[2px] text-[1.2rem] rounded w-1/5'
                            onClick={() => setIsPreview(true)}>
                                View
                            </button>
                        </div>
                    </div>

                    <SyntaxHighlighter language={language} style={theme} showLineNumbers={true}>
                        {snippet}
                    </SyntaxHighlighter>
                </div>
            </div>

        </div>
    )
}

export default CodeSnippetCard