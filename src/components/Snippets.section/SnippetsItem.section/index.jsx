const SnippetsItem = ({ data }) => {
    console.log(data)
    return (
        <>
            {data.length > 0 ? (
                data.map((item, index) => (
                    <div key={index} className="w-full bg-white rounded flex text-[1rem]">
                        <h1 className="">{item.id}</h1>
                    </div>
                ))
            ) : (
                <h1 className="text-white">No data</h1>
            )}
        </>
    )
}

export default SnippetsItem;
