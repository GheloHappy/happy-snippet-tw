import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="sticky w-full bg-gray-700 p-3 md:justify-between md:items-center flex flex-col md:flex-row text-white shadow">
            <Link to="/" className="text-[1.5rem] md:text-[2rem] ml-5 md:ml-2">Happy Snippets</Link>
            <ul className="flex-col gap-5 md:gap-10 md:flex-row flex justify-start pt-5 md:pt-0 ml-5 w-full h-full ">
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink to="/snippets">Snippets</CustomLink>
                <CustomLink to="/profile">Profile</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end:true})

    return (
        <li className={`text-[1.2rem] font-semibold ${isActive ? "text-red-400" : ""}`}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Nav;