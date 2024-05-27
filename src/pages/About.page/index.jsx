import { FaGithub } from "react-icons/fa"
import { GiGluttonousSmile } from "react-icons/gi"
import { IoMdLink } from "react-icons/io"
import { SiGmail } from "react-icons/si"
import { useSelector } from "react-redux"

const About = () => {
    const is_dark = useSelector((state) => state.user.user_settings.dark_mode)

    return (
        <div className={`flex flex-col items-center w-full ${is_dark ? "bg-[#1d1d1d]" : "bg-gray-100"} p-1`}>
            <div className={`w-full mt-[4rem] md:mt-[5rem] flex flex-col items-center ${is_dark ? "text-white border-white border": "text-black border-black border"}
            h-full rounded-md p-5 gap-5 font-flower border-4 md:justify-center`}>
                <div className="w-full flex justify-center text-[5rem] gap-5">
                    <GiGluttonousSmile /> <h1 className="text-[4rem] ">About</h1> <GiGluttonousSmile /> 
                </div>
                <p className="w-full px-5 text-center text-[1.5rem] font-semibold">Welcome to Happy Snippets, where you can easily save, organize, and share your favorite code snippets with the world.</p>
                <div className="w-full flex flex-col md:flex-row items-center text-[1.5rem] md:text-[2rem] justify-center px-4 mt-[1rem]">
                    <h1 className="text-blue-500 font-bold">Creator: </h1>
                    <p className="font-semibold">&nbsp; Ghelonico Maligaya </p>
                </div>
                <div className="w-full flex flex-col md:flex-row items-center text-[1.5rem] md:text-[2rem] justify-center px-4 ">
                    <h1 className="text-blue-500 flex gap-2 items-center font-bold"><FaGithub /> Github: &nbsp;</h1>
                    <a href="https://github.com/GheloHappy" target="_blank" className="underline truncate hover:text-clip"> 
                    https://github.com/GheloHappy</a>
                </div>
                <div className="w-full flex flex-col md:flex-row items-center text-[1.5rem] md:text-[2rem] justify-center px-4 ">
                    <h1 className="text-blue-500 flex gap-2 items-center font-bold"><SiGmail /> Email: &nbsp;</h1>
                    <p className="truncate hover:text-clip font-sans text-[1.2rem]"> ghelonicomaligaya111@gmail.com</p>
                </div>
                <div className="w-full flex flex-col md:flex-row items-center text-[1.5rem] md:text-[2rem] justify-center px-4 ">
                    <h1 className="text-blue-500 flex gap-2 items-center font-bold"><IoMdLink /> Portfolio: &nbsp;</h1>
                    <a href="https://ghelo.prohub.site" target="_blank" className="underline truncate hover:text-clip"> 
                    https://ghelo.prohub.site</a>
                </div>
            </div>
        </div>
    )
}

export default About