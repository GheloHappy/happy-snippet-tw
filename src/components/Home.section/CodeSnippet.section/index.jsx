
import TextareaAutosize from 'react-textarea-autosize';
import languageOptions from './Language.options';
import { setSnippet, setSnippetLanguage, setSnippetSave, setSnippetView } from '../../../redux/snippet.redux/snippetActions';
import { useDispatch, useSelector } from 'react-redux';


const CodeSnippet = () => {
    const dispatch = useDispatch()
    const snippet = useSelector((state) => state.snippet.snippet_code)
    const language = useSelector((state) => state.snippet.snippet_language)

    const handleSnippetChange = (e) => {
        dispatch(setSnippet(e.target.value))
        snippet
    };

    const handleLanguageChange = (e) => {
        dispatch(setSnippetLanguage(e.target.value));
    };

    return (
        <div className="text-white mt-[1rem] w-full text-center border p-3 rounded">
            <div className="flex flex-col gap-5">
                <div className='w-full flex gap-5'>
                    <label className="font-semibold">Language: </label>
                    <select
                        onChange={handleLanguageChange}
                        className="w-1/2 p-2 rounded text-black"
                        value={language}
                    >
                        {languageOptions.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                    <div className='w-1/2 text-end'>
                        {snippet ?
                            <button
                                className="border-white border-[2px] text-[1.2rem] rounded px-4"
                                onClick={() => { dispatch(setSnippetSave(true)), dispatch(setSnippetView(true)) }}
                            >
                                Save
                            </button>
                            : null
                        }

                    </div>
                </div>

                <TextareaAutosize
                    className="text-black w-full p-2 rounded"
                    minRows={10}
                    maxRows={30}
                    placeholder='Enter your snippet here...'
                    onChange={handleSnippetChange}
                    value={snippet}
                />
            </div>
        </div>
    );
};

export default CodeSnippet;