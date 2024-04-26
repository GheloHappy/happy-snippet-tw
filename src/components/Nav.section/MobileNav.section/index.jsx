import { RxCross1 } from "react-icons/rx"
import { useDispatch } from "react-redux"
import { setNavState } from "../../../redux/system.redux.j/systemActions"
import { CustomLink } from "../DesktopNav.section"
import { useNavigate } from "react-router-dom"
import cookies from "react-cookies"

const MobileNav = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    
    const handleLogout = () => {
        localStorage.clear();
        cookies.remove('_hs');
        dispatch(setNavState(false))
        navigate('/');
    }

    return (
        <div className="fixed flex flex-col justify-end items-end top-0 w-full h-full bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm md:hidden">
            <div className="h-full w-4/5 bg-white flex flex-col ">
                <div className="flex w-full p-3 border items-center justify-center">
                    <div className="w-full">
                        <h1 className="text-[1.5rem] ">Snippet</h1>
                    </div>
                    <div className="w-full h-full text-end flex flex-col items-end justify-center">
                        <button onClick={() => { dispatch(setNavState(false)) }} className="text-[1.5rem]"><RxCross1 /></button>
                    </div>
                </div>
                <div className="w-full bg-red-100 flex flex-col items-start justify-center h-full">
                    <ul className="flex flex-col justify-end gap-10">
                        <CustomLink to="/home">Home</CustomLink>
                        <CustomLink to="/snippets">Snippets</CustomLink>
                        <CustomLink to="/settings">Settings</CustomLink>
                    </ul>
                </div>
                <div className="w-full bg-slate-100 h-1/6 items-center justify-center flex flex-col">
                    <h1>profile</h1>
                </div>
                <div className="w-full bg-green-200">
                    <h1>About</h1>
                </div>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>

    )
}

export default MobileNav