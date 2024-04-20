import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
 
const CodeSnippetCard = ({ language, theme, snippet }) => {
    return (
        <div className='text-start w-full h-screen'>
            <div className='flex flex-col items-center justify-center  border p-3 rounded mt-[1rem]'>
                <div className="w-full p-2 text-white">
                    <label className="font-semibold">Preview: </label>
                    <SyntaxHighlighter language={language} style={theme} showLineNumbers={true}>
                        {snippet}
                    </SyntaxHighlighter>
                </div>
            </div>

        </div>
    )
}

export default CodeSnippetCard