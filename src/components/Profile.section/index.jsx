const ProfileSection = () => {
    const info = JSON.parse(localStorage.getItem('user_info'))

    return (
        <div className="flex-col flex mt-[2.5rem] md:mt-[4.5rem] w-full pt-6 md:gap-3 items-center justify-center text-white">
            <div className="w-[70%] bg-red-50">
                <div className="w-full flex text-black">
                    <div className="w-[30%] flex justify-center flex-col items-center">
                        <h1>IMAGE</h1>
                        <h1>{info ? info.display_name : "Snippet User"}</h1>
                    </div>
                    <div className="w-[70%] flex justify-center">
                        <h1>STATS</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSection