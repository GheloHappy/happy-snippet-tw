import { MdOutlineMenu, MdOutlineSettings } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link, useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { setNavState } from "../../../redux/system.redux.j/systemActions";
import { GiDiamondsSmile } from "react-icons/gi";
import { useState } from "react";
import { RiShutDownLine } from "react-icons/ri";
import { FaExclamation } from "react-icons/fa";


const DesktopNav = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isProfile, setIsProfile] = useState(false)

    const handleProfile = () => {
        setIsProfile(!isProfile);
    }

    const handleLogout = () => {
        localStorage.clear();
        cookies.remove('_hs');
        dispatch(setNavState(false))
        navigate('/');
    }

    return (
        <nav className="fixed top-0 w-full bg-gray-700 p-3 md:justify-between md:items-center flex md:flex-row text-white shadow">
            <Link to="/" className="text-[1.2rem] sm:text-[1.5rem] md:text-[2rem] md:ml-2 w-full items-center justify-center">Happy Snippets</Link>
            <ul className="hidden md:flex justify-end gap-10 md:items-center md:justify-center">
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink to="/snippets">Snippets</CustomLink>
                {/* <CustomLink to="/settings">Settings</CustomLink> */}
                <div className="w-full text-[2rem] bg-black rounded-full p-2"
                    onClick={handleProfile}>
                    <GiDiamondsSmile />
                    {
                        isProfile ?
                            <div className="w-[15%] flex flex-col absolute bg-white text-black text-[1.1rem] font-bold right-4 top-16 rounded  p-3 gap-8">
                                <Link to="/settings">
                                    <span className="w-full flex gap-2 items-center justify-center">
                                        <MdOutlineSettings />
                                        Settings
                                    </span>
                                </Link>
                                <Link to="/about">
                                    <span className="w-full flex gap-2 items-center justify-center">
                                        <FaExclamation />
                                        About
                                    </span>
                                </Link>
                                <span className="w-full flex flex-col items-center justify-center p-3  border rounded bg-slate-50">
                                    <span className="flex items-center justify-center gap-2 text-red-500"
                                        onClick={handleLogout}>
                                        <RiShutDownLine />
                                        Logout
                                    </span>
                                </span>
                            </div>
                            : null
                    }
                </div>
            </ul>
            <div className="md:hidden flex items-center justify-end w-full ">
                <button onClick={() => { dispatch(setNavState(true)) }}
                    className="text-[2rem]"><MdOutlineMenu /></button>
            </div>
        </nav>
    )
}

export function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    const dispatch = useDispatch();

    return (
        <li className={`md:text-[1.2rem] text-[1.5rem] font-semibold ${isActive ? "text-red-400" : ""}`} onClick={() => { dispatch(setNavState(false)) }}>
            <Link to={to} {...props} >
                {children}
            </Link>
        </li>
    )
}

export default DesktopNav