const RemoveApproval = ({ setIsRemoving, onDelete, title }) => {
    return (

        <div className="w-full h-screen fixed top-0 bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm p-2 md:p-10 rounded flex flex-col items-center justify-center">
            <div className="bg-gray-100 mx-3 md:mx-0 md:w-1/2 rounded p-5">
                <h1 className="text-[1.5rem] font-bold text-center">Are you sure you want to delete snippet
                    "<span className="text-red-600">{title}</span>" ?</h1>
                <div className="w-full flex items-center justify-center gap-3 text-white text-[1.5rem] mt-5">
                    <button className="w-full bg-blue-500 rounded p-2 font-semibold"
                        onClick={() => setIsRemoving(false)}>Cancel</button>
                    <button className="w-full bg-red-500 rounded p-2 font-semibold"
                        onClick={onDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default RemoveApproval;