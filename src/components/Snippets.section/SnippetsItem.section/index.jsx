const SnippetsItem = ({ data }) => {
    
    return (
        <>
            
            {data.user_snippet.lenght > 0 ? (
                data.user_snippet.map((item, index) => {
                    <div key={index} className="w-full bg-white rounded flex">
                        <h1>{item.snippet_title}</h1>
                    </div>
                })
            ) : <h1 className="text-white">No data</h1>}
        </>
    )
}

export default SnippetsItem;