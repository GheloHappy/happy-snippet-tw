import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="sticky w-full bg-slate-400 p-3 justify-between items-center flex">
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
    return (
        <li className="text-[1.2rem]">
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Nav;