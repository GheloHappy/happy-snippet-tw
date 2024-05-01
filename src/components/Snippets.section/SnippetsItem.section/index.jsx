const SnippetsItem = ({ data }) => {

    return (
        <div className="md:w-3/4 w-full">
            {data.length > 0 ? (
                data.map((item, index) => (
                    <div key={index} className="w-full bg-white rounded flex text-[1rem] p-3 mt-3 gap-5 overflow-auto ">
                        <div className="grid grid-cols-3 w-full">
                            <h1 className="">{item.date}</h1>
                            <h1 className="">{item.snippet_title}</h1>
                            <h1 className="">{item.snippet_language}</h1>
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
