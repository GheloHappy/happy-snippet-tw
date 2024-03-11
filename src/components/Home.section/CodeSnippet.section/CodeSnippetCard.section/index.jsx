import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const CodeSnippetCard = ({language, theme, snippet}) => {
    return (
        <div className='w-full text-start'>
            <label className="font-semibold">Preview: </label>
            <div className="w-full">
                <SyntaxHighlighter language={language} style={theme} showLineNumbers={true}>
                    {snippet}
                </SyntaxHighlighter>
            </div>
        </div>
    )
}

export default CodeSnippetCard