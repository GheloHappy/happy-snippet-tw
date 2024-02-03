import { Link } from "react-router-dom";

const Options = () => {
    return (
        <div>
            <div className="max-w-full m-auto px-[40px] overflow-hidden text-[1.5rem] flex flex-col gap-[4px] py-[8px]">
                <div className="xsm:flex gap-[8px] items-center justify-center ">
                    <p className="text-[1.2rem]">Don't have an account?</p>
                    <Link to={'/register'} className="text-[1.2rem] text-cyan-300 cursor-pointer">Register</Link>
                </div>
            </div>
        </div>
    )
}

export default Options;