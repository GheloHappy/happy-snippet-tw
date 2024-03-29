import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="fixed top-0 w-full bg-gray-700 p-3 md:justify-between md:items-center flex flex-col md:flex-row text-white shadow">
            <Link to="/" className="text-[1.5rem] md:text-[2rem] ml-5 md:ml-2">Happy Snippets</Link>
            <ul className="flex justify-end gap-10">
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