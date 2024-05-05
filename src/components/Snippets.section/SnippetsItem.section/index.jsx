import React, { useState } from "react";
import { toast } from "react-toastify";
import { postData } from "../../../utils/fetcher";
import { useDispatch, useSelector } from "react-redux";
import { setSnippet, setSnippetLanguage, setSnippetTittle, setSnippetView } from "../../../redux/snippet.redux/snippetActions";
import { setPageNumber } from "../../../redux/system.redux.j/systemActions";

const SnippetsItem = ({ data, setDataView, setIsLoading }) => {
    const dispatch = useDispatch();
    const user_id = useSelector((state) => state.user.user_id);
    const page_number = useSelector((state) => state.system.page_number)
    const itemsPerPage = 10; 

    const handleView = async (snippet_id) => {
        setIsLoading(true);
        try {
            const payload = {
                snippet_id: snippet_id,
                user_id: user_id,
            };

            const response = await postData('snippet/list', payload);
            
            const snippet_data = response.data.user_snippet
            
            dispatch(setSnippetLanguage(snippet_data.snippet_language))
            dispatch(setSnippet(snippet_data.snippet_code))
            dispatch(setSnippetTittle(snippet_data.snippet_title))
            dispatch(setSnippetView(true))
            setDataView(snippet_data)
        } catch (err) {
            console.log(err);
            toast.error('Internal Server Error.');
        }
        setIsLoading(false);
    };

    const indexOfLastItem = page_number * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (page_number) => dispatch(setPageNumber(page_number));

    return (
        <div className="md:w-3/4 w-full overflow-auto">
            {currentItems.length > 0 ? (
                currentItems.map((item, index) => (
                    <div key={index} className="w-full bg-white rounded flex text-[1rem] p-3 mt-2 gap-5">
                        <div className="grid grid-cols-3 w-full">
                            <div className="w-full flex flex-col items-center justify-center font-semibold">
                                <p>{item.date}</p>
                            </div>
                            <div className="w-full overflow-auto p-2 flex flex-col text-center">
                                <p>{item.snippet_title}</p>
                            </div>
                            <div className="w-full flex flex-col items-end pr-4 justify-center">
                                <button className="font-semibold text-blue-500 underline" onClick={() => handleView(item.id)}>View</button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <h1 className="text-white font-bold text-[3rem]">No data</h1>
                </div>
            )}
            {/* Pagination */}
            <ul className="flex justify-center mt-4 w-full text-black">
                {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, index) => (
                    <li key={index} className="mx-2">
                        <button onClick={() => paginate(index + 1)} className="text-white text-[1.2rem] font-semibold">{index + 1}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SnippetsItem;
