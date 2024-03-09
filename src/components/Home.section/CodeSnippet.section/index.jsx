import TextareaAutosize from 'react-textarea-autosize';

const CodeSnippet = () => {
    return (
        <div className="text-white mt-[1rem] w-1/3 text-center border p-5 rounded">
            <form className="flex flex-col gap-5 items-start">
                <label className="font-semibold">Title: </label>
                <input type="text" className="w-1/2 rounded text-[1.1rem] p-2 text-black capitalize" />
                <label className="font-semibold">Snippet: </label>
                <TextareaAutosize
                    className="text-black w-full p-2 rounded"
                    minRows={3}
                    maxRows={6}
                />
                <div className="flex gap-2">
                    <input type="checkbox" className=""/>
                    <label>Make it private?</label>
                </div>
                <button className="border-white border-[3px] text-[1.1rem] rounded w-1/4">Save</button>
            </form>
        </div>
    )
}

export default CodeSnippet