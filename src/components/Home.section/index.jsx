import CodeSnippet from "./CodeSnippet.section";
import CodeSnippetCard from './CodeSnippetCard.section'
import SnippetPreview from "../SnippetPreview.Modal";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";

const HomeSection = () => {
    const isViewing = useSelector((state) => state.snippet.snippet_view)
    const isSaving = useSelector((state) => state.snippet.snippet_save)
    const isPreview = useSelector((state) => state.snippet.snippet_preview)
    return (
        <>
            {isViewing || isPreview || isSaving ?
                <SnippetPreview />
                :
                <div className="flex-col md:flex-row flex mt-[2rem] md:mt-[3rem] w-full p-5 gap-1 md:gap-3">
                    {/* <h1 className="text-[2rem] text-center text-white">Create a Snippet</h1> */}
                    <div className="md:w-1/2 w-full">
                        <CodeSnippet/>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <CodeSnippetCard />
                    </div>
                </div>
            }

        </>
    )
}

export default HomeSection;