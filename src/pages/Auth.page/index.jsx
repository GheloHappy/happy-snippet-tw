import { Routes, Route } from "react-router-dom"
import Login from "../../components/pages/Auth/Login"

const Auth = () => {
    return (
        <div className="flex w-screen h-screen overflow-hidden items-center bg-gradient-to-r from-[#202020] to-[#0f0f0f] content-center text-white">
            <div className="flex flex-col justify-center mx-auto">
                <h1 className="font-serif text-[4rem] text-center">LOGIN</h1>
                <Routes>
                    <Route path='/' index element={<Login />} />
                </Routes>
            </div>
        </div>
    )
}

export default Auth