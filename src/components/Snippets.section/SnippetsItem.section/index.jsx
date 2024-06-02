import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { postData } from "../../../utils/fetcher";
import { useDispatch, useSelector } from "react-redux";
import { setSnippet, setSnippetEditing, setSnippetLanguage, setSnippetPrivacy, setSnippetSave, setSnippetTittle, setSnippetView } from "../../../redux/snippet.redux/snippetActions";
import { setPageNumber } from "../../../redux/system.redux.j/systemActions";
import { FaSadTear } from "react-icons/fa";
import { SyncLoader } from "react-spinners";
import { SlOptions } from "react-icons/sl";
import RemoveApproval from "./RemoveApproval.modal";

const SnippetsItem = ({ data, setIsLoading, isSearching, fetchAllSnippets }) => {
    const dispatch = useDispatch();
    const user_id = useSelector((state) => state.user.user_id);
    const page_number = useSelector((state) => state.system.page_number)
    const [toggleStates, setToggleStates] = useState({});
    const itemsPerPage = 10;
    const toggleRef = useRef(null);
    const [isRemoving, setIsRemoving] = useState(false)
    const [snippetToDelete, setSnippetToDelete] = useState(null);
    const [snippetToDeleteTitle, setSnippetToDeleteTitle] = useState(null);

    const handleViewEdit = async (snippet_id, isEdit) => {
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
            dispatch(setSnippetPrivacy(snippet_data.is_public))

            if (isEdit) {
                dispatch(setSnippetEditing(true))
            } else {
                dispatch(setSnippetView(true))
                dispatch(setSnippetSave(false))
            }
            setToggleStates(false);
        } catch (err) {
            console.log(err);
            toast.error('Internal Server Error.');
        }
        setIsLoading(false);
    };


    const handleDeleteSnippet = async (snippet_id, snippet_title) => {
        setIsRemoving(true)
        setSnippetToDelete(snippet_id)
        setToggleStates(false);
        setSnippetToDeleteTitle(snippet_title)
    }

    const confirmDeleteSnippet = async () => {
        setIsRemoving(false);
        setIsLoading(true);
        try {
            const payload = {
                snippet_id: snippetToDelete,
                user_id: user_id,
            };

            const response = await postData('snippet/remove', payload);

            toast.success(response.data.msg);

            await fetchAllSnippets();
        } catch (err) {
            console.log(err);
            toast.error('Internal Server Error.');
        }
        setIsLoading(false);
    };

    const handleToggle = (id) => {
        setToggleStates((prevState) => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    }

    const indexOfLastItem = page_number * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (page_number) => dispatch(setPageNumber(page_number));

    //default use for closing modals on click outside of ref
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (toggleRef.current && !toggleRef.current.contains(event.target)) {
                setToggleStates(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [toggleRef]);

    return (
        <>
            {isRemoving ? <RemoveApproval setIsRemoving={setIsRemoving} onDelete={confirmDeleteSnippet} title={snippetToDeleteTitle} /> : null}
            {isSearching ?
                <div className="w-full h-screen flex flex-col items-center justify-center overflow-hidden">
                    <SyncLoader color="#fff" size={20} />
                </div>
                :
                <div className="md:w-3/4 w-full overflow-auto px-1">
                    {currentItems.length > 0 ? (
                        currentItems.map((item, index) => (
                            <div key={index} className="w-full bg-white rounded flex text-[1rem] mt-2">
                                {toggleStates[item.id] ?
                                    <div ref={toggleRef} className="grid grid-cols-5 w-full py-5 font-semibold rounded">
                                        <div className="w-full flex flex-col items-center justify-center text-blue-500 cursor-pointer"  onClick={() => handleViewEdit(item.id, false)}>
                                            <span>View</span>
                                        </div>
                                        <div className="w-full flex flex-col items-center justify-center text-yellow-600 cursor-pointer" onClick={() => handleViewEdit(item.id, true)}>
                                            <span>Edit</span>
                                        </div>
                                        <div className="w-full flex flex-col items-center justify-center text-green-500 cursor-pointer">
                                            <span>Share</span>
                                        </div>
                                        <div className="w-full flex flex-col items-center justify-center text-red-500 cursor-pointer" onClick={() => handleDeleteSnippet(item.id, item.snippet_title)}>
                                            <span>Delete</span>
                                        </div>
                                        <div className="w-full flex flex-col items-center justify-center ">
                                            <span onClick={() => {setToggleStates(false)}}>Cancel</span>
                                        </div>
                                    </div>
                                    :
                                    <div className="grid grid-cols-[28%,37%,10%,25%] w-full py-3">
                                        <div className="w-full flex flex-col items-center justify-center font-semibold">
                                            <p>{item.date}</p>
                                        </div>
                                        <div className="w-full overflow-auto p-2 flex flex-col text-center font-semibold">
                                            <p>{item.snippet_title}</p>
                                        </div>
                                        <div className="w-full p-2 flex flex-col text-center items-center justify-center">
                                            <p className={`font-semibold ${item.is_public ? "text-red-500" : "text-green-600"}`}>{item.is_public ? "Public" : "Private"}</p>
                                        </div>
                                        <div className="w-full p-2 flex flex-col text-center items-center justify-center">
                                            <div className="">
                                                <button className="text-[1.5rem] text-blue-800" onClick={() => handleToggle(item.id)}>
                                                    <SlOptions />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {/* <div className="grid grid-cols-[25%,40%,10%,25%] w-full py-3">
                                    <div className="w-full flex flex-col items-center justify-center font-semibold">
                                        <p>{item.date}</p>
                                    </div>
                                    <div className="w-full overflow-auto p-2 flex flex-col text-center font-semibold">
                                        <p>{item.snippet_title}</p>
                                    </div>
                                    <div className="w-full p-2 flex flex-col text-center items-center justify-center">
                                        <p className={`font-semibold ${item.is_public ? "text-red-500" : "text-green-600"}`}>{item.is_public ? "Public" : "Private"}</p>
                                    </div>
                                    <div className="w-full p-2 flex flex-col text-center items-center justify-center">
                                        <div className="">
                                            <button className="text-[1.5rem] text-blue-800" onClick={() => handleToggle(item.id)}>
                                                <SlOptions />
                                            </button>
                                            {toggleStates[item.id] ?
                                                <div ref={toggleRef} className="fixed bg-gray-100 py-2 rounded border border-black gap-2
                                                        font-semibold flex flex-col items-center justify-center text-start cursor-pointer">
                                                    <div className="w-full px-3" onClick={() => handleViewEdit(item.id, false)}>
                                                        <span className="text-blue-500 " >View</span>
                                                    </div>
                                                    <div className="w-full px-3">
                                                        <span className="text-yellow-600" onClick={() => handleViewEdit(item.id, true)}>Edit</span>
                                                    </div>
                                                    {item.is_public ?
                                                        <div className="w-full px-3">
                                                            <span className="text-green-500">Share</span>
                                                        </div>
                                                        : null
                                                    }
                                                    <div className="w-full px-3">
                                                        <span className="text-red-500" onClick={() => handleDeleteSnippet(item.id, item.snippet_title)}>Delete</span>
                                                    </div>
                                                </div>
                                                :
                                                null
                                            }
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        ))
                    ) : (
                        <div className="w-full h-full mt-[10rem] flex flex-col items-center justify-center">
                            <h1 className="text-white font-bold text-[2rem] md:text-[3rem] mt-[2rem] flex items-center gap-3"><FaSadTear /> Not found. </h1>
                        </div>
                    )}
                    {/* Pagination */}
                    <ul className="flex justify-center mt-4 w-full text-black">
                        {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, index) => (
                            <li key={index} className="mx-2">
                                <button
                                    onClick={() => paginate(index + 1)}
                                    className={`text-[1.2rem] font-semibold ${page_number === index + 1 ? "text-red-500" : "text-white"
                                        }`}
                                >
                                    {index + 1}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </>
    );
};

export default SnippetsItem;
