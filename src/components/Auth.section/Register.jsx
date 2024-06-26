import { useState } from "react"
import { postData } from "../../utils/fetcher";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";

const Register = ({ setIsLogin }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({
        isError: false,
        isErrorMsg: '',
    })

    const [fields, setFields] = useState({
        username: '',
        email: '',
        password: '',
        confirmPass: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        if (Object.values(fields).some((fieldValue) => typeof fieldValue === "string" && !fieldValue.trim(),)) {
            setError({
                isError: true,
                isErrorMsg: "Please fill all fields"
            });

            setLoading(false)
            return;
        }

        if (fields.password !== fields.confirmPass) {
            setError({
                isError: true,
                isErrorMsg: "Password does not match"
            });

            setLoading(false)
            return;
        }

        if (fields.password.length <= 5 || fields.username.length <= 5) {
            setError({
                isError: true,
                isErrorMsg: "Credentials must be longer than 5"
            });

            setLoading(false)
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(fields.email)) {
            setError({
                isError: true,
                isErrorMsg: "Please enter a valid email address"
            });
            setLoading(false);
            return;
        }

        try {
            const response = await postData('user', fields)

            if (response.data.status) {

                toast.success("User successfully registered.")
                setIsLogin(true)
            } else {
                setError({
                    isError: true,
                    isErrorMsg: response.data.msg
                });

                setLoading(false)
                return
            }
        } catch (err) {
            console.log(err)
        }

        setError({
            isError: false,
            isErrorMsg: ""
        });

        setLoading(false)
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
                <p className="text-red-400 text-[1.5rem] mb-3 text-center">
                    {error.isErrorMsg}
                </p>
                :
                <></>
            }
            <form className="xsm:w-full sm:w-1/2  text-black">
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
                    <p className={`${fields.email ? 'absolute -translate-y-2/3' : 'absolute top-[50%] left-[6px] opacity-0'} z-10 text-white bg-gray-900 border border-gray-700 rounded 
                    px-2 text-m font-semibold w-fit`}>Email</p>
                    <input className="w-full text-[1.2rem] appearance-none p-3 rounded focus:outline-none mb-6"
                        type="email"
                        placeholder="Email"
                        value={fields.email}
                        name="email"
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
                <label className="relative rounded">
                    <p className={`${fields.confirmPass ? 'absolute -translate-y-2/3' : 'absolute top-[50%] left-[6px] opacity-0'} z-10 text-white bg-gray-900 border border-gray-700 rounded 
                    px-2 text-m font-semibold w-fit`}>Confirm Password</p>
                    <input className="w-full text-[1.2rem] appearance-none p-3 rounded focus:outline-none  mb-4"
                        type="password"
                        placeholder="Confirm Password"
                        value={fields.confirmPass}
                        name="confirmPass"
                        onChange={handleChanges} />
                </label>
                <button className="w-full text-[1.2rem] py-2 bg-[#e6e6e6] text-black font-semibold hover:bg-gray-500 hover:text-white
                    rounded "
                    type="submit"
                    disabled={loading}
                    onClick={handleSubmit}>
                    {loading ? <PulseLoader color="#fff" size={10} /> : 'Submit'}
                </button>
            </form>
        </div>
    )
}

export default Register