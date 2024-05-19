import { RxCross1 } from "react-icons/rx"
import { useDispatch, useSelector } from "react-redux"
import { setNavState } from "../../../redux/system.redux.j/systemActions"
import { CustomLink } from "../DesktopNav.section"
import { Link, useNavigate } from "react-router-dom"
import cookies from "react-cookies"
import { GiDiamondsSmile } from "react-icons/gi"
import { RiShutDownLine } from "react-icons/ri"
import { FaExclamation, FaFileCode } from "react-icons/fa"
import { MdHome, MdOutlineKeyboardArrowRight, MdOutlineSettings } from "react-icons/md"

const MobileNav = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const is_dark = useSelector((state) => state.user.user_settings.dark_mode)
    const info = JSON.parse(localStorage.getItem('user_info'));

    const handleLogout = () => {
        localStorage.clear();
        cookies.remove('_hs');
        dispatch(setNavState(false))
        navigate('/');
    }

    return (
        <div className={`fixed flex flex-col justify-end items-end top-0 w-full h-full bg-opacity-5 backdrop-filter backdrop-blur-sm md:hidden  `}>
            <div className={` h-full w-4/5 flex flex-col ${is_dark ? "bg-black text-white" : "bg-gray-100 text-black"}`}>
                <div className={`flex w-full p-3 border ${is_dark ? "border-b-white " : "border"}    items-center justify-center`}>
                    {/* <div className="w-full">
                        <h1 className="text-[1.5rem] ">Snippet</h1>
                    </div> */}
                    <div className="w-full h-full text-end flex flex-col items-end justify-center">
                        <button onClick={() => { dispatch(setNavState(false)) }} className="text-[2rem] "><RxCross1 /></button>
                    </div>
                </div>
                <div className={` w-full flex flex-col items-start justify-center h-full `}>
                    <ul className="flex flex-col justify-end gap-10 pl-4">
                        <div className="flex items-center gap-1 text-[1.3rem]">
                            <MdHome />
                            <CustomLink to="/home">Home</CustomLink>
                        </div>
                        <div className="flex items-center gap-1 text-[1.3rem]">
                            <FaFileCode />
                            <CustomLink to="/snippets">Snippets</CustomLink>
                        </div>
                        <div className="flex items-center gap-1 text-[1.3rem]">
                            <MdOutlineSettings />
                            <CustomLink to="/settings">Settings</CustomLink>
                        </div>
                    </ul>
                </div>
                <div className={` w-full ${is_dark ?  "border-t" : "border-t"}  h-[10%] items-start px-3 p-4`}>
                    <div className={` p-2 ${is_dark ? "bg-gray-100 text-black" : "bg-black text-white"}  rounded-full text-[1.5rem] sm:text-[2rem] gap-4 flex items-center justify-center `}>
                        <GiDiamondsSmile />
                        <span className="font-flower">{info ? info.display_name : "Snippet User"}</span>
                    </div>
                </div>
                <div className="w-full flex text-center text-[1.2rem] font-bold gap-2 p-4">
                    <Link to="/about" className="flex w-full" onClick={() => { dispatch(setNavState(false))}}>
                        <div className="flex items-center gap-2 w-1/2">
                            <FaExclamation />
                            About
                        </div>
                        <div className="flex text-[1.5rem] font-bold w-1/2 justify-end">
                            <MdOutlineKeyboardArrowRight />
                        </div>
                    </Link>
                </div>
                <div className="w-full flex flex-col items-center justify-center text-[1.3rem] p-3 border rounded bg-slate-50"
                    onClick={handleLogout}>
                    <button
                        className="flex items-center text justify-center gap-2 font-bold text-red-500 ">
                        <RiShutDownLine />
                        Logout</button>
                </div>
            </div>
        </div>

    )
}

export default MobileNav