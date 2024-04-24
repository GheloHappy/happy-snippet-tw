import { RxCross1 } from "react-icons/rx"
import { useDispatch } from "react-redux"
import { setNavState } from "../../../redux/system.redux.j/systemActions"

const MobileNav = () => {
    const dispatch = useDispatch()

    return (
        <div className="fixed h-full w-4/5 bg-white right-0 top-0 flex flex-col md:hidden">
            <div className="flex w-full p-3 border items-center justify-center">
                <div className="w-full">
                    <h1 className="text-[1.5rem] ">Snippet</h1>
                </div>
                <div className="w-full h-full text-end flex flex-col items-end justify-center">
                    <button onClick={() => {dispatch(setNavState(false))}} className="text-[1.5rem]"><RxCross1 /></button>
                </div>
            </div>
        </div>
    )
}

export default MobileNav