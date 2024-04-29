import { useEffect, useState } from "react"
import SnippetsItem from "./SnippetsItem.section"
import { getData } from "../../utils/fetcher"
import { useSelector } from "react-redux"

const SnippetSection = () => {
    const user_id = useSelector((state) => state.user.user_id)
    const [data, setData] = useState([])
    
    useEffect(() => {
        const fetchSnippets = async () => {
            if (user_id > 0) {
                try {
                    const response = await getData(`snippet/list/${user_id}`)

                    setData(response.data)
                }
                catch (err) {
                    console.log(err)
                }
            }
        }

        fetchSnippets()
    }, [user_id])

    return (
        <div className="flex-col md:flex-row flex mt-[3.5rem] md:mt-[4.5rem] w-full p-5 gap-1 md:gap-3 items-center justify-center">
            <SnippetsItem data={data ? data : [] } />
        </div>
    )
}

export default SnippetSection