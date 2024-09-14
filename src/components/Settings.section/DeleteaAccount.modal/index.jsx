const DeleteAccount = ({setIsDelete}) => {

    return (
        <div className="w-full h-screen fixed top-0 bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm p-2 md:p-10 rounded flex flex-col items-center justify-center">
            <div className="bg-gray-100 mx-3 md:mx-0 md:w-1/2 rounded p-5">
                <h1 className="text-[1.5rem] font-bold text-center">Are you sure you want to delete your account ?</h1>
                <div className="w-full flex-col md:flex-row flex items-center justify-center p-1 my-2 gap-5 mt-4">
                    <label className="font-semibold text-[1.2rem]">Input your password: </label>
                    <input type="password" className="p-2 w-full md:w-1/2 rounded text-[1.2rem]" placeholder="Your Password"/>
                </div>
                <div className="w-full flex items-center justify-center gap-3 text-white text-[1.5rem] mt-5">
                    <button className="w-full bg-blue-500 rounded p-2 font-semibold"
                    onClick={() => { setIsDelete(false) }}>Cancel</button>
                    <button className="w-full bg-red-500 rounded p-2 font-semibold"
                    >Delete</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteAccount