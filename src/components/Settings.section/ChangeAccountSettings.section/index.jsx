const ChangeAccountSettings = () => {
    return (
        <div className="w-full h-full p-1 flex flex-col items-center justify-center">
            <div className="w-full h-full bg-black p-2 rounded">
                <div className="border w-full flex flex-col rounded items-center p-4 gap-3 text-black">
                    <label className="font-semibold text-white text-[1.5rem]">Change Password</label>
                    <input type="password" className="rounded p-2 text-[1rem] w-full md:w-1/2 " placeholder="Current Password"/>
                    <input type="password" className="rounded p-2 text-[1rem] w-full md:w-1/2 " placeholder="New Password"/>
                    <input type="password" className="rounded p-2 text-[1rem] w-full md:w-1/2 " placeholder="Retype Password"/>
                    <button className="w-full p-2 mx-2 font-semibold rounded md:w-1/2 text-blue-500 bg-gray-100">UPDATE</button>
                </div>
                <div className="border w-full flex flex-col rounded items-center p-4 gap-3 text-black mt-[1rem]">
                  <button className="bg-gray-100 text-red-600 w-full md:w-1/2 p-4 font-bold rounded">DELETE ACCOUNT</button>
                </div>
            </div>
        </div>
    )
}

export default ChangeAccountSettings