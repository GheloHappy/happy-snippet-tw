import { useEffect, useState } from "react"
import SnippetsItem from "./SnippetsItem.section"
import { getData } from "../../utils/fetcher"
import { useSelector } from "react-redux"
import { IoIosSearch } from "react-icons/io"

const SnippetSection = () => {
    const user_id = useSelector((state) => state.user.user_id)
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchSnippets = async () => {
            try {
                if (user_id > 0) {
                    const response = await getData(`snippet/list/${user_id}`)

                    setData(response.data.user_snippet)
                }
            }
            catch (err) {
                console.log(err)
            }
        }

        fetchSnippets()
    }, [user_id])

    return (
        <div className="flex-col flex mt-[2.5rem] md:mt-[4.5rem] w-full p-5 md:gap-3 items-center justify-center">
            <div className="w-full bg-white rounded p-1 flex gap-3 md:w-3/4">
                <input className="text-[1.1rem] w-full border rounded p-2" 
                 placeholder={`Search Title`}
                type="text" />
                <button className="text-[2rem]"><IoIosSearch /> </button>
            </div>
            <SnippetsItem data={data} />
        </div>
    )
}

export default SnippetSection