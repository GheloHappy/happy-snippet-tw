import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { themesOptions } from '../Welcome.section/ThemesOptions.section';

const SyntaxHighlighterComponent = () => {
    const [theme, setTheme] = useState()
    const snippet = useSelector((state) => state.snippet.snippet_code)
    const language = useSelector((state) => state.snippet.snippet_language)

    const user_settings = JSON.parse(localStorage.getItem('user_settings'));

    useEffect(() => {
        if (user_settings) {
            const getTheme = () => {
                const selectedTheme = themesOptions.find(option => option.label === user_settings.snippet_theme)?.value;
                setTheme(selectedTheme)
            }
            getTheme();
        }
    }, [])

    return (
        <SyntaxHighlighter
            language={language}
            style={theme}
            showLineNumbers={user_settings ? user_settings.snippet_line_numbers : false}
            wrapLongLines={user_settings ? user_settings.snippet_wrap_lines : false}
        >
            {snippet}
        </SyntaxHighlighter>

    )
}

export default SyntaxHighlighterComponent;