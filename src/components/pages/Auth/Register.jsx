import { useState } from "react"

const Register = () => {
    const [fields, setFields] = useState({
        username: '',
        email: '',
        password: '',
        confirmPass: '',
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
            <form className="xsm:w-full sm:w-1/2  text-black">
                <label className="relative rounded">
                    <p className={`${fields.username ? 'absolute -translate-y-2/3' : 'absolute top-[50%] left-[6px] opacity-0'} text-white bg-gray-900 border border-gray-700 rounded 
                    px-2 text-m font-semibold w-fit`}>Username</p>
                    <input className="w-full text-[1.2rem] appearance-none p-2 rounded focus:outline-none mb-6"
                        type="text"
                        placeholder="Username"
                        value={fields.username}
                        name="username"
                        onChange={handleChanges} />
                </label>
                <label className="relative rounded">
                    <p className={`${fields.email ? 'absolute -translate-y-2/3' : 'absolute top-[50%] left-[6px] opacity-0'} z-10 text-white bg-gray-900 border border-gray-700 rounded 
                    px-2 text-m font-semibold w-fit`}>Email</p>
                    <input className="w-full text-[1.2rem] appearance-none p-2 rounded focus:outline-none mb-6"
                        type="email"
                        placeholder="Email"
                        value={fields.email}
                        name="email"
                        onChange={handleChanges} />
                </label>
                <label className="relative rounded">
                    <p className={`${fields.password ? 'absolute -translate-y-2/3' : 'absolute top-[50%] left-[6px] opacity-0'} z-10 text-white bg-gray-900 border border-gray-700 rounded 
                    px-2 text-m font-semibold w-fit`}>Password</p>
                    <input className="w-full text-[1.2rem] appearance-none p-2 rounded focus:outline-none  mb-4"
                        type="password"
                        placeholder="Password"
                        value={fields.password}
                        name="password"
                        onChange={handleChanges} />
                </label>
                <label className="relative rounded">
                    <p className={`${fields.confirmPass ? 'absolute -translate-y-2/3' : 'absolute top-[50%] left-[6px] opacity-0'} z-10 text-white bg-gray-900 border border-gray-700 rounded 
                    px-2 text-m font-semibold w-fit`}>Confirm Password</p>
                    <input className="w-full text-[1.2rem] appearance-none p-2 rounded focus:outline-none  mb-4"
                        type="password"
                        placeholder="Confirm Password"
                        value={fields.confirmPass}
                        name="confirmPass"
                        onChange={handleChanges} />
                </label>
                <button className="w-full text-[1.2rem] py-2 bg-[#e6e6e6] text-black font-semibold hover:bg-black hover:text-white
                    rounded ">SUBMIT</button>
            </form>
        </div>
    )
}

export default Register