import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const SnippetPreview = ({ language, theme, code_snippet, setIsPreview }) => {
    return (
        <div className="w-full h-screen absolute overflow-auto flex flex-col items-center justify-center ">
            <div className='w-full p-5 mt-[5rem]'>
                <button className='text-[1.5rem]' onClick={() => setIsPreview(false)}>X</button>
                <SyntaxHighlighter language={language} style={theme} showLineNumbers={true}>
                    {code_snippet}
                </SyntaxHighlighter>
            </div>

            <div className="w-full h-full bg-black opacity-25">

            </div>
        </div>
    )
}

export default SnippetPreview