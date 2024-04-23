import { useSelector } from 'react-redux';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const SyntaxHighlighterComponent = () => {
    const snippet = useSelector((state) => state.snippet.snippet)
    const language = useSelector((state) => state.snippet.snippet_language)
    const wrapLines = useSelector((state) => state.user.user_settings.snippet_wrap_lines)
    const lineNumbers = useSelector((state) => state.user.user_settings.snippet_line_numbers)

    // const { snippet, language, wrapLines, lineNumbers } = useSelector((state) => ({
    //     snippet: state.snippet.snippet,
    //     language: state.snippet.snippet_language,
    //     wrapLines: state.user.user_settings.snippet_wrap_lines,
    //     lineNumbers: state.user.user_settings.snippet_line_numbers,
    // }));

    return (
        <SyntaxHighlighter
            language={language}
            style={oneDark}
            showLineNumbers={lineNumbers}
            wrapLongLines={wrapLines}
        >
            {snippet}
        </SyntaxHighlighter>
    )
}

export default SyntaxHighlighterComponent;