import { toast } from "react-toastify";
import { postData } from "../../../utils/fetcher";
import { useSelector } from "react-redux";

const SnippetsItem = ({ data, setIsLoading }) => {
    const user_id = useSelector((state) => state.user.user_id)

    const handleView = async (snippet_id) => {

        setIsLoading(true)
        try {
            const payload = {
                snippet_id: snippet_id,
                user_id: user_id,
            }

            const snippet_data = await postData('snippet/list', payload)

            console.log(snippet_data)
        } catch (err) {
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
                            <div className="w-full overflow-auto p-2 flex flex-col text-center">
                                <p className="">{item.snippet_title}</p>
                            </div>
                            <div className="w-full flex flex-col items-end pr-4 justify-center">
                                <button className="font-semibold text-blue-500 underline"
                                    onClick={() => handleView(item.id)}>View</button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <h1 className="text-white font-bold text-[3rem]">No data</h1>
                </div>
            )}
        </div>
    )
}

export default SnippetsItem;
