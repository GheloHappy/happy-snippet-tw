const Options = () => {
    return (
        <div>
            <div className="max-w-full m-auto px-[20px] overflow-hidden text-[1.5rem] flex flex-col gap-[4px] py-[8px]">
                <div className="flex gap-[8px] items-center justify-center cursor-pointer">
                    <p>Don't have an account?</p>
                    <a href="/register" className="text-cyan-300">Register</a>
                </div>
            </div>
        </div>
    )
}

export default Options;