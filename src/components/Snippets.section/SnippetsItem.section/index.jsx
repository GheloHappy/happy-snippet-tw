const SnippetsItem = ({ data }) => {

    return (
        <div className="md:w-3/4 w-full">
            {data.length > 0 ? (
                data.map((item, index) => (
                    <div key={index} className="w-full bg-white rounded flex text-[1rem] p-3 mt-3 gap-5 overflow-auto ">
                        <div className="grid grid-cols-3 w-full">
                            <div className="w-full flex flex-col items-center justify-center font-semibold">
                                <p className="">{item.date}</p>
                            </div>
                            <div className="w-full overflow-auto p-2">
                                <p className="">{item.snippet_title}</p>
                            </div>
                            <div className="w-full flex flex-col items-end pr-4 justify-center">
                                <button className="font-semibold text-blue-500 underline">View</button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <h1 className="text-white">No data</h1>
            )}
        </div>
    )
}

export default SnippetsItem;
