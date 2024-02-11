import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="sticky w-full bg-gray-700 p-3 justify-between items-center flex text-white">
            <Link to="/" className="text-[2rem]">Happy Snippets</Link>
            <ul className="flex gap-10 justify-end">
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
        <li className={`text-[1.2rem] ${isActive ? "text-red-400" : ""}`}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Nav;