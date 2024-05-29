import { useState } from "react";
import { postData } from "../../utils/fetcher";
import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import cookies from 'react-cookies'
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { setUserId, setUserSettings } from "../../redux/user.redux/userActions";

const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

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
        setLoading(true)

        if (!fields.username || !fields.password) {
            setError({
                isError: true,
                isErrorMsg: "Please fill all fields"
            });

            setLoading(false)
            return
        }

        try {
            const response = await postData('auth', fields);
            if (response.data.token) {
                const decoded = jwtDecode(response.data.token);
                cookies.save('_hs', response.data.token, {
                    maxAge: decoded.maxAge,
                    path: '/',
                    secure: true,
                    sameSite: 'Lax',
                    //httpOnly: true, //uncomment for live
                })

                const settings = decoded.user_settings

                if (settings.exist) {
                    dispatch(setUserSettings({
                        exist: settings.exist,
                        dark_mode: settings.values.dark_mode,
                        snippet_theme: settings.values.snippet_theme,
                        snippet_line_numbers: settings.values.snippet_line_numbers,
                        snippet_wrap_lines: settings.values.snippet_wrap_lines,
                    }))
                } else {
                    const settings = {
                        exist: false,
                        dark_mode: false,
                        snippet_theme: "coy",
                        snippet_line_numbers: false,
                        snippet_wrap_lines: false
                    }

                    localStorage.setItem("user_settings", JSON.stringify(settings))
                }

                dispatch(setUserId(decoded.id))
                //dispatch(setUserDisplayName(decoded.display_name))
                localStorage.setItem("user_info", JSON.stringify({display_name: decoded.display_name}))

                navigate('/home')
            } else {
                setError({
                    isError: true,
                    isErrorMsg: response.data.msg
                });

                setLoading(false)
                return
            }
        } catch (err) {
            console.log(err);
            setError({
                isError: true,
                isErrorMsg: "Something went wrong :'("
            });
        }
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
            <form className="xsm:w-full sm:w-[70%] text-black">
                <label className="relative rounded ">
                    <p className={`${fields.username ? 'absolute -translate-y-2/3' : 'absolute top-[50%] left-[6px] opacity-0'} text-white bg-gray-900 border border-gray-700 rounded 
                    px-2 text-m font-semibold w-fit`}>Username</p>
                    <input className="w-full text-[1.2rem] appearance-none p-3 rounded focus:outline-none mb-6 font-semibold"
                        type="text"
                        placeholder="Username"
                        value={fields.username}
                        name="username"
                        onChange={handleChanges} />
                </label>
                <label className="relative rounded">
                    <p className={`${fields.password ? 'absolute -translate-y-2/3' : 'absolute top-[50%] left-[6px] opacity-0'} z-10 text-white bg-gray-900 border border-gray-700 rounded 
                    px-2 text-m font-semibold w-fit`}>Password</p>
                    <input className="w-full text-[1.2rem] appearance-none p-3 rounded focus:outline-none mb-4 font-semibold"
                        type="password"
                        placeholder="Password"
                        value={fields.password}
                        name="password"
                        onChange={handleChanges} />
                </label>
                <button className="w-full text-[1.2rem] py-2 bg-[#e6e6e6] text-black font-semibold hover:bg-gray-500 hover:text-white
                    rounded"
                    type="submit"
                    disabled={loading}
                    onClick={handleLogin}>
                    {loading ? <PulseLoader color="#fff" size={10} /> : 'Submit'}
                </button>
            </form>
        </div>
    )
}

export default Login;