import { useSelector } from "react-redux";
import DesktopNav from "./DesktopNav.section";
import MobileNav from "./MobileNav.section";

const Nav = () => {
    const nav_state = useSelector((state) => state.system.nav_state)
    return (
        <>
            <DesktopNav />
            {
                nav_state ? <MobileNav /> : null
            }

        </>
    )
}

export default Nav; 