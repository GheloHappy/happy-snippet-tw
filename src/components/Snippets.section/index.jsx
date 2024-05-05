import { useEffect, useState } from "react"
import SnippetsItem from "./SnippetsItem.section"
import { getData } from "../../utils/fetcher"
import { useSelector } from "react-redux"
import { IoIosSearch } from "react-icons/io"
import Loading from '../Loading'
import SnippetPreview from "../SnippetPreview.Modal"

const SnippetSection = () => {
    const user_id = useSelector((state) => state.user.user_id)
    const isViewing = useSelector((state) => state.snippet.snippet_view)
    const [data, setData] = useState([])
    const [dataView, setDataView] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchSnippets = async () => {
            try {
                if (user_id > 0) {
                    const response = await getData(`snippet/list/${user_id}`);
                    const sortedData = response.data.user_snippet.sort((a, b) => new Date(b.date) - new Date(a.date));

                    setData(sortedData);
                }
            }
            catch (err) {
                console.log(err)
            }
        }

        fetchSnippets()
    }, [user_id])

    return (
        <>
            {isLoading ? <Loading /> : null}
            {isViewing ? 
                <SnippetPreview />
            :
                <div className="flex-col flex mt-[2.5rem] md:mt-[4.5rem] w-full p-5 md:gap-3 items-center justify-center">
                    <div className="w-full bg-white rounded p-1 flex gap-3 md:w-3/4">
                        <input className="text-[1.1rem] w-full border rounded p-2"
                            placeholder={`Search Title`}
                            type="text" />
                        <button className="text-[2rem]"><IoIosSearch /> </button>
                    </div>
                    <SnippetsItem data={data}
                        setDataView={setDataView}
                        setIsLoading={setIsLoading} />
                </div>

            }
        </>

    )
}

export default SnippetSection