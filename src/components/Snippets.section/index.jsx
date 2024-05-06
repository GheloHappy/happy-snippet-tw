import { useEffect, useState } from "react"
import SnippetsItem from "./SnippetsItem.section"
import { getData, postData } from "../../utils/fetcher"
import { useSelector } from "react-redux"
import { IoIosSearch } from "react-icons/io"
import Loading from '../Loading'
import SnippetPreview from "../SnippetPreview.Modal"
import _ from "lodash"

const SnippetSection = () => {
    const user_id = useSelector((state) => state.user.user_id)
    const [searchItem, setSearchItem] = useState('')
    const isViewing = useSelector((state) => state.snippet.snippet_view)
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isSearching, setIsSearching] = useState(false)

    useEffect(() => {
        const fetchAllSnippets = async () => {
            setIsSearching(true)
            try {
                if (user_id > 0 && searchItem === "") {
                    const response = await getData(`snippet/list/${user_id}`);
                    const sortedData = response.data.user_snippet.sort((a, b) => new Date(b.date) - new Date(a.date));

                    setData(sortedData);
                }
            }
            catch (err) {
                console.log(err)
            }
            setIsSearching(false)
        }

        fetchAllSnippets()

        const fetchSnippets = async () => {
            setIsSearching(true)
            try {
                const payload = {
                    title_search: searchItem,
                    user_id: user_id,
                };

                if (searchItem) {
                    const response = await postData(`snippet/list/search`, payload);
                    const sortedData = response.data.user_snippet.sort((a, b) => new Date(b.date) - new Date(a.date));

                    setData(sortedData);
                }
            }
            catch (err) {
                console.log(err)
            }
            setIsSearching(false)
        }

        const handleSearchThrottled = _.debounce(() => {
            const trimmedSearchItem = searchItem.trim();

            if (trimmedSearchItem) {
                fetchSnippets();
            }
        }, 300);

        handleSearchThrottled();
        

        // Cleanup the throttled function to avoid memory leaks
        return () => {
            handleSearchThrottled.cancel();
        };
    }, [searchItem, user_id])

    const handleSearch = (e) => {
        setSearchItem(e.target.value)
    }

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
                            type="text"
                            onChange={handleSearch} />
                        {/* <button className="text-[2rem]"><IoIosSearch /> </button> */}
                    </div>
                    <SnippetsItem data={data}
                        setIsLoading={setIsLoading}
                        isSearching={isSearching} />
                </div>

            }
        </>

    )
}

export default SnippetSection
