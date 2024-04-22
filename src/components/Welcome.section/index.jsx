import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { themesOptions } from './ThemesOptions.section';
import { toast } from 'react-toastify';
import { postData } from '../../utils/fetcher';
import { useSelector } from 'react-redux';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Welcome = () => {
    const user_id = useSelector((state) => state.user.user_id)
    const [snippet_theme, setSnippetTheme] = useState(oneDark);
    const [selectedThemeName, setSelectedThemeName] = useState('one-dark');
    const [user_settings, setUserSettings] = useState({
        dark_mode: false,
        snippet_line_numbers: false,
        snippet_wrap_lines: false,
    })

    const handleCheckChanges = e => {
        const { name, checked } = e.target;
        setUserSettings(prev => ({
            ...prev,
            [name]: checked
        }));
    }

    const handleThemeChange = (e) => {
        const selectedThemeName = e.target.value;
        const selectedTheme = themesOptions.find(option => option.label === selectedThemeName)?.value;
        setSelectedThemeName(selectedThemeName);
        if (selectedTheme) {
            setSnippetTheme(selectedTheme);
        }
    };

    const handleSave = async () => {
        console.log(selectedThemeName)
        const data = {
            user_id: user_id,
            dark_mode: user_settings.dark_mode,
            snippet_theme: selectedThemeName,
            snippet_line_numbers: user_settings.snippet_line_numbers,
            snippet_wrap_lines: user_settings.snippet_wrap_lines,
        }

        try {
            const response = await postData('settings', data)

            console.log(response)
        } catch (err) {
            console.log(err)
            toast.error('Internal Server Error');
        }
    }
    return (
        <div className="w-full h-screen pt-[5rem] flex flex-col items-center justify-center">
            <div className={`w-5/6 ${user_settings.dark_mode ? 'bg-black text-white' : 'bg-white text-black'} rounded flex flex-col items-center text-center gap-3 p-3`}>
                <h1 className="font-semibold text-[1.5rem] mt-[1rem]">Welcome before you proceed please select your settings.</h1>
                <p className="font-semibold">You can change it later in (Profile) settings.</p>

                <div className='flex w-full justify-center gap-2'>
                    <div className='flex flex-col items-center justify-center'>
                        <label className='text-[1.2rem] font-semibold'>Theme : </label>
                    </div>
                    <select
                        onChange={handleThemeChange}
                        className="w-1/4 p-2 rounded bg-[#282C34] text-white"
                        defaultValue="javascript"
                    >
                        {themesOptions.map((option, index) => (
                            <option key={index} value={option.label}>{option.label}</option>
                        ))}
                    </select>
                </div>


                <div className='flex gap-3 w-full items-center justify-center'>
                    <label className='rounded bg-[#282C34] text-white p-2 text-[1.2rem]'>
                        Dark Mode
                        <input
                            className='ml-2'
                            type="checkbox"
                            name='dark_mode'
                            value={user_settings.dark_mode}
                            onClick={handleCheckChanges}
                        />
                    </label>
                    <label className='rounded bg-[#282C34] text-white p-2 text-[1.2rem]'>
                        Show Line Numbers
                        <input
                            className='ml-2'
                            type="checkbox"
                            value={user_settings.snippet_line_numbers}
                            name='snippet_line_numbers'
                            onClick={handleCheckChanges}
                        />
                    </label>
                    <label className='rounded bg-[#282C34] text-white p-2 text-[1.2rem]'>
                        Wrap Lines
                        <input
                            className='ml-2'
                            type="checkbox"
                            name='snippet_wrap_lines'
                            value={user_settings.snippet_wrap_lines}
                            onClick={handleCheckChanges}
                        />
                    </label>
                </div>
                <div className='w-full h-full p-3 text-[1.1rem]'>
                    <SyntaxHighlighter language='javascript' style={snippet_theme} showLineNumbers={user_settings.snippet_line_numbers}
                        wrapLongLines={user_settings.snippet_wrap_lines}>
                        {sampleText()}
                    </SyntaxHighlighter>
                </div>
                <button onClick={handleSave}
                className='bg-[#282C34] rounded font-semibold text-white text-[1.5rem] w-1/5 p-1'>Save</button>
            </div>
        </div>
    )

    function sampleText() {
        const sampleText =
            `function createStyleObject(classNames, style) {
        return classNames.reduce((styleObject, className) => {
            return {...styleObject, ...style[className]};
        }, {});
}
          
function createClassNameString(classNames) {
    return classNames.join(' ');
}
          
// this comment is here to demonstrate an extremely long line length, well beyond what you should probably allow in your own code, though sometimes you'll be highlighting code you can't refactor, which is unfortunate but should be handled gracefully`
        return sampleText
    }
}

export default Welcome