import { useSelector } from 'react-redux';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const SnippetPreview = ({ language, theme, setIsPreview }) => {
    const snippet = useSelector((state) => state.snippet.snippet)

    return (
        <div className="w-full h-screen absolute overflow-auto flex flex-col items-center justify-center ">
            <div className='w-full p-5 mt-[5rem] bg-none'>
                <button className='text-[1.5rem]' onClick={() => setIsPreview(false)}>X</button>
                <SyntaxHighlighter language={language} style={theme} showLineNumbers={true}>
                    {snippet}
                </SyntaxHighlighter>
            </div>

            <div className="w-full h-full bg-black opacity-25">

            </div>
        </div>
    )
}

export default SnippetPreview