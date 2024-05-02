import { useState } from "react";
import { toast } from "react-toastify";
import { postData } from "../../../utils/fetcher";
import { useSelector } from "react-redux";

const SnippetsItem = ({ data }) => {
    const user_id = useSelector((state) => state.user.user_id)
    const [isLoading, setIsLoading] = useState(false)

    const handleView = async (snippet_id) => {

        setIsLoading(true)
        try {
            const payload = {
                snippet_id: snippet_id,
                user_id: user_id,
            }

            const snippet_data = await postData('snippet/list', payload)

            console.log(snippet_data)
        } catch (err){
            console.log(err)
            toast.error('Internal Server Error.')
        }
        setIsLoading(false)
    }

    return (
        <div className="md:w-3/4 w-full">
            {data.length > 0 ? (
                data.map((item, index) => (
                    <div key={index} className="w-full bg-white rounded flex text-[1rem] p-3 mt-3 gap-5 overflow-auto ">
                        <div className="grid grid-cols-3 w-full">
                            <div className="w-full flex flex-col items-center justify-center font-semibold">
                                <p className="">{item.date}</p>
                            </div>
                            <div className="w-full overflow-auto p-2">
                                <p className="">{item.snippet_title}</p>
                            </div>
                            <div className="w-full flex flex-col items-end pr-4 justify-center">
                                <button className="font-semibold text-blue-500 underline"
                                onClick={() => handleView(index)}>View</button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <h1 className="text-white">No data</h1>
            )}
        </div>
    )
}

export default SnippetsItem;
