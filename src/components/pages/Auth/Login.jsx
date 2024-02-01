import { useState } from "react";
import Options from "./Options";

const Login = () => {
    const [fields, setFields] = useState({
        username: '',
        password: '',
    })

    const handleChanges = e => {
        setFields(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }


    return (
        <div className="flex flex-col items-center w-full px-10">
            <form className="w-full text-black">
                <label className="relative rounded">
                    <p className={`${fields.username ? 'absolute -translate-y-2/3' : 'absolute top-[50%] left-[6px] opacity-0'} text-white bg-gray-900 border border-gray-700 rounded 
                    px-2 text-m font-semibold w-fit`}>Username</p>
                    <input className="w-full text-[1.2rem] appearance-none p-2 rounded focus:outline-none mb-5"
                        type="text"
                        placeholder="Username"
                        value={fields.username}
                        name="username"
                        onChange={handleChanges} />
                </label>
                <label className="relative rounded">
                    <p className={`${fields.password ? 'absolute -translate-y-2/3' : 'absolute top-[50%] left-[6px] opacity-0'} text-white bg-gray-900 border border-gray-700 rounded 
                    px-2 text-m font-semibold w-fit`}>Password</p>
                    <input className="w-full text-[1.2rem] appearance-none p-2 rounded focus:outline-none  mb-5"
                        type="text"
                        placeholder="Password"
                        value={fields.password}
                        name="password"
                        onChange={handleChanges} />
                </label>
                <button className="w-full text-[1.2rem] py-2 bg-[#e6e6e6] text-black font-semibold hover:bg-black hover:text-white
                    rounded ">SUBMIT</button>
            </form>
            <Options />
        </div>
    )
}

export default Login;