import { useState } from "react";
import { postData } from "../../../utils/fethcer";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [fields, setFields] = useState({
        username: '',
        password: '',
    })

    const [error, setError] = useState({
        isError: false,
        isErrorMsg: '',
    })

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!fields.username || !fields.password) {
            setError({
                isError: true,
                isErrorMsg: "Please fill all fields"
            });
            return
        }

        try {
            const response = await postData('auth', fields);
            if (response.data.token) {
                navigate('/home')
            } else {
                setError({
                    isError: true,
                    isErrorMsg: response.data.msg
                });
                return
            }
        } catch (err) {
            console.log(err);
            setError({
                isError: true,
                isErrorMsg: "Something went wrong :'("
            });
        }
    }

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
            {error.isError ?
                <p className="text-red-400 text-[1.5rem] mb-3">
                    {error.isErrorMsg}
                </p>
                :
                <></>
            }
            <form className="xsm:w-full sm:w-[70%] text-black">
                <label className="relative rounded">
                    <p className={`${fields.username ? 'absolute -translate-y-2/3' : 'absolute top-[50%] left-[6px] opacity-0'} text-white bg-gray-900 border border-gray-700 rounded 
                    px-2 text-m font-semibold w-fit`}>Username</p>
                    <input className="w-full text-[1.2rem] appearance-none p-3 rounded focus:outline-none mb-6"
                        type="text"
                        placeholder="Username"
                        value={fields.username}
                        name="username"
                        onChange={handleChanges} />
                </label>
                <label className="relative rounded">
                    <p className={`${fields.password ? 'absolute -translate-y-2/3' : 'absolute top-[50%] left-[6px] opacity-0'} z-10 text-white bg-gray-900 border border-gray-700 rounded 
                    px-2 text-m font-semibold w-fit`}>Password</p>
                    <input className="w-full text-[1.2rem] appearance-none p-3 rounded focus:outline-none  mb-4"
                        type="password"
                        placeholder="Password"
                        value={fields.password}
                        name="password"
                        onChange={handleChanges} />
                </label>
                <button className="w-full text-[1.2rem] py-2 bg-[#e6e6e6] text-black font-semibold hover:bg-black hover:text-white
                    rounded "
                    type="submit"
                    onClick={handleLogin}>SUBMIT</button>
            </form>
        </div>
    )
}

export default Login;