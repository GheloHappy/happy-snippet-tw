const Options = ({setIsLogin, isLogin}) => {
    return (
        <div>
            <div className="max-w-full m-auto px-[40px] overflow-hidden text-[1.5rem] flex flex-col gap-[4px] py-[8px]">
                {isLogin ?
                    <div className="xsm:flex gap-[8px] items-center justify-center ">
                        <p className="text-[1.2rem]">Don't have an account?</p>
                        <p to={'/register'} className="text-[1.2rem] text-cyan-300 cursor-pointer" onClick={() => setIsLogin(false)}>Register</p>
                    </div>
                    :
                    <div className="xsm:flex gap-[8px] items-center justify-center ">
                        <p className="text-[1.2rem]">Already have an account?</p>
                        <p className="text-[1.2rem] text-cyan-300 cursor-pointer" onClick={() => setIsLogin(true)}>Login</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default Options;