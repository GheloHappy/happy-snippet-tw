import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const CodeSnippetCard = ({ language, theme, snippet }) => {
    return (
        <div className='text-start w-full h-screen'>
            <div className='flex flex-col items-center justify-center'>
                <div className="w-3/4">
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