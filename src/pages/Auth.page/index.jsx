import Login from "../../components/Auth.section/Login.jsx"
import Register from "../../components/Auth.section/Register"
import Options from "../../components/Auth.section/Options"
import { useState } from "react"

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true)

    return (
        <div className="flex w-screen h-screen overflow-hidden items-center content-center text-white">
            <div className="flex flex-col justify-center mx-auto">
                <h1 className="font-flower md:text-[5rem] text-[3rem] font-bold text-center mb-10">Happy Snippet</h1>
                <h1 className="font-serif text-[4rem] text-center">{isLogin ? 'Login' : 'Register'}</h1>
                {isLogin ?
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