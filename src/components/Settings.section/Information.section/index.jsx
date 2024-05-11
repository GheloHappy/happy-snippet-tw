const Information = () => {
    return (
        <div className="w-full h-full p-5 flex flex-col items-center justify-center bg-[#151515] rounded text-white">
            <form className="flex flex-col items-center text-center w-full sm:p-5 h-full rounded gap-3  ">
                <div className="w-full flex gap-3 flex-col sm:px-10">
                    <div className="w-full flex items-start">
                        <label className="font-semibold">Display Name :</label>
                    </div>
                    <input className="w-full p-2 rounded text-black"
                        type="text" placeholder="Display Name" />
                </div>
                <div className="w-full flex gap-3 flex-col sm:px-10">
                    <div className="w-full flex items-start">
                        <label className="font-semibold">First Name :</label>
                    </div>
                    <input className="w-full p-2 rounded text-black"
                        type="text" placeholder="First Name (Optional)" />
                </div>
                <div className="w-full flex gap-3 flex-col sm:px-10">
                    <div className="w-full flex items-start">
                        <label className="font-semibold">Last Name :</label>
                    </div>
                    <input className="w-full p-2 rounded text-black"
                        type="text" placeholder="Last Name (Optional)" />
                </div>
                <div className="w-full flex gap-3 flex-col sm:px-10">
                    <div className="w-full flex items-start">
                        <label className="font-semibold">Birthday (Optional) : </label>
                    </div>
                    <input className="w-full p-2 rounded text-black"
                        type="date" />
                </div>
                <div className="w-full pt-5 sm:px-10">
                    <button className="w-full bg-[#151515] text-white border-[3px]
                     font-serif py-2 text-[1.5rem] rounded">
                        UPDATE
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Information