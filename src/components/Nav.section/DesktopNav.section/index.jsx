import { MdOutlineMenu, MdOutlineSettings } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { setNavState } from "../../../redux/system.redux.j/systemActions";
import { GiDiamondsSmile } from "react-icons/gi";
import { useEffect, useRef, useState } from "react";
import { RiShutDownLine } from "react-icons/ri";
import { FaExclamation } from "react-icons/fa";
import cookies from 'react-cookies'


const DesktopNav = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isProfile, setIsProfile] = useState(false)
    const is_dark = useSelector((state) => state.user.user_settings.dark_mode)
    const info = JSON.parse(localStorage.getItem('user_info'))
    const navRef = useRef(null);

    function background() {
        return is_dark ? "bg-black text-white border border-white" : "bg-gray-100 text-black border border-black";
    }

    const handleProfile = () => {
        setIsProfile(!isProfile);
    }

    const handleLogout = () => {
        dispatch(setNavState(false))
        localStorage.clear();
        cookies.remove('_hs');
        navigate('/');
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsProfile(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [navRef]);

    return (
        <nav ref={navRef} className={`fixed top-0 w-full ${background()} p-3 md:justify-between md:items-center flex md:flex-row shadow rounded`}>
            <Link to="/" className="text-[1.2rem] sm:text-[1.5rem] md:text-[2rem] md:ml-2 items-center justify-center font-flower">HappySnippet</Link>
            <ul className="hidden md:flex justify-end gap-10 md:items-center md:justify-center">
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink to="/snippets">Snippets</CustomLink>
                {/* <CustomLink to="/settings">Settings</CustomLink> */}
                <div className={`w-full text-[2rem] rounded-full p-2 mr-3 ${is_dark ? "bg-white text-black" : "bg-black text-white"}`}
                    onClick={handleProfile}>
                    <GiDiamondsSmile />
                    {
                        isProfile ?
                            <div className={`w-[15%] flex flex-col z-50 ${background()}  absolute text-[1.1rem] font-bold right-8 top-16 rounded  p-3 gap-4`}>
                                <Link to="/profile" className={`w-full text-center flex flex-col items-center justify-center rounded-full p-2  ${background()}`}>
                                    <span className="font-flower text-[1.3rem]">{info ? info.display_name : "Snippet User"}</span>
                                </Link>
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
                                <span className="w-full flex flex-col items-center justify-center p-3 border rounded bg-slate-50"
                                    onClick={handleLogout}>
                                    <span className="flex items-center justify-center gap-2 text-red-500"
                                    >
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