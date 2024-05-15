import { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { themesOptions } from './ThemesOptions.section';
import { toast } from 'react-toastify';
import { postData } from '../../utils/fetcher';
import { useDispatch, useSelector } from 'react-redux';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useMatch, useNavigate } from 'react-router-dom';
import { setUserSettings } from '../../redux/user.redux/userActions';

const Welcome = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user_id = useSelector((state) => state.user.user_id)
    const [snippet_theme, setSnippetTheme] = useState(oneDark);
    const [selectedThemeName, setSelectedThemeName] = useState('one-dark');
    const [user_settings, setUserLocalSettings] = useState({
        dark_mode: false,
        snippet_line_numbers: false,
        snippet_wrap_lines: false,
    })

    //handling in settings
    const isSettings = useMatch({ path: '/settings' })

    useEffect(() => {
        // Retrieve user settings from local storage
        const savedSettings = JSON.parse(localStorage.getItem('user_settings'));
        if (savedSettings) {
            setUserLocalSettings(savedSettings);
            setTheme(savedSettings.snippet_theme)
        }
    }, []);

    const handleCheckChanges = e => {
        const { name, checked } = e.target;
        setUserLocalSettings(prev => ({
            ...prev,
            [name]: checked
        }));
    };

    const handleThemeChange = (e) => {
        const target = e.target.value;
        setTheme(target)
    };

    function setTheme(theme) {
        const selectedTheme = themesOptions.find(option => option.label === theme)?.value;
        setSelectedThemeName(theme);
        if (selectedTheme) {
            setSnippetTheme(selectedTheme);
        }
    }

    const handleSave = async () => {
        const data = {
            user_id: user_id,
            dark_mode: user_settings.dark_mode,
            snippet_theme: selectedThemeName,
            snippet_line_numbers: user_settings.snippet_line_numbers,
            snippet_wrap_lines: user_settings.snippet_wrap_lines,
        }

        try {
            const response = await postData('settings', data)

            if (response.data.status) {
                dispatch(setUserSettings({
                    exist: true,
                    dark_mode: user_settings.dark_mode,
                    snippet_theme: selectedThemeName,
                    snippet_line_numbers: user_settings.snippet_line_numbers,
                    snippet_wrap_lines: user_settings.snippet_wrap_lines,
                }))

                toast.success(response.data.msg)
                if (isSettings) {
                    navigate('/settings')
                    return
                }
                navigate('/home')
            } else {
                toast.error(response.data.msg)
            }
        } catch (err) {
            console.log(err)
            toast.error('Internal Server Error');
        }
    }
    return (
        <div className={`w-full h-full ${isSettings ? 'mt-[1rem' : 'mt-[5rem]'} flex flex-col items-center justify-center`}>
            <div className={`w-[90%] ${user_settings.dark_mode ? "bg-black text-white border border-white" : "bg-gray-100 text-black border border-black"} rounded-lg flex flex-col 
            items-center text-center gap-1 md:gap-3 p-2 md:p-3`}>
                {isSettings ? null : <h1 className="font-semibold text-[1.3rem] sm:text-[1.5rem]">Welcome! before you proceed please select your settings.</h1>}
                <div className='flex sm:flex-row flex-col w-full justify-center items-center gap-1 mt-3'>
                    <label className='sm:text-[1.2rem] text-[1rem] font-semibold hidden sm:flex'>Theme : </label>
                    <select
                        onChange={handleThemeChange}
                        className="p-2 rounded bg-[#282C34] text-white"
                        value={selectedThemeName}
                    >
                        {themesOptions.map((option, index) => (
                            <option key={index} value={option.label}>{option.label}</option>
                        ))}
                    </select>
                </div>

                <div className='flex sm:flex-row flex-col gap-1 md:gap-3 w-full items-center justify-center'>
                    <label className='rounded bg-[#282C34] text-white p-2 sm:text-[1.2rem] text-[1rem]'>
                        {user_settings.dark_mode ? "Dark Mode" : "Light Mode"}
                        <input
                            className='ml-2'
                            type="checkbox"
                            name='dark_mode'
                            checked={user_settings.dark_mode}
                            onChange={handleCheckChanges}
                        />
                    </label>
                    <label className='rounded bg-[#282C34] text-white p-2 sm:text-[1.2rem] text-[1rem]'>
                        Show Line Numbers
                        <input
                            className='ml-2'
                            type="checkbox"
                            checked={user_settings.snippet_line_numbers}
                            name='snippet_line_numbers'
                            onChange={handleCheckChanges}
                        />
                    </label>
                    <label className='rounded bg-[#282C34] text-white p-2 sm:text-[1.2rem] text-[1rem]'>
                        Wrap Lines
                        <input
                            className='ml-2'
                            type="checkbox"
                            name='snippet_wrap_lines'
                            checked={user_settings.snippet_wrap_lines}
                            onChange={handleCheckChanges}
                        />
                    </label>
                </div>
                <div className='w-full h-full p-1 sm:p-3 sm:text-[1.1rem] text-[.9rem]'>
                    <SyntaxHighlighter language='javascript' style={snippet_theme} showLineNumbers={user_settings.snippet_line_numbers}
                        wrapLongLines={user_settings.snippet_wrap_lines}>
                        {sampleText()}
                    </SyntaxHighlighter>
                </div>
                <button onClick={handleSave}
                    className='bg-[#282C34] rounded font-semibold text-white sm:text-[1.5rem] text-[1.2rem] w-full md:w-1/2 p-2'>Save</button>
                {isSettings ? null : <p className="font-semibold mt-1">"You can change it later in (Profile) settings."</p>}
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