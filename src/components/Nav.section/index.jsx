import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="sticky w-full bg-slate-400 p-3">
            <div className="flex gap-10 items-right justify-end w-full text-[1.3rem]">
                <Link to='/home' className="text-black ">Home</Link>
                <Link to='/snippets' className="text-black ">Snippets</Link>
                <Link to='/profile' className="text-black ">Profile</Link>
            </div>
        </nav>
    )
}

export default Nav;