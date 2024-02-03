import Login from "../../components/pages/Auth.section/Login"
import Register from "../../components/pages/Auth.section/Register"
import Options from "../../components/pages/Auth.section/Options"
import { useState } from "react"

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true)

    return (
        <div className="flex w-screen h-screen overflow-hidden items-center bg-gradient-to-r from-[#202020] to-[#0f0f0f] content-center text-white">
            <div className="flex flex-col justify-center mx-auto">
                <h1 className="font-serif text-[4rem] text-center">{isLogin ? 'Login' : 'Register'}</h1>
                { isLogin ?
                    <Login />
                    :
                    <Register setIsLogin={setIsLogin} />
                }
                <Options setIsLogin={setIsLogin} isLogin={isLogin} />
            </div>
        </div>
    )
}

export default Auth