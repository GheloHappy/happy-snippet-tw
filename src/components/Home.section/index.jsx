import CodeSnippet from "./CodeSnippet.section";
import { dark, oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CodeSnippetCard from './CodeSnippetCard.section'
import { useState } from "react";
import SnippetPreview from "./CodeSnippet.Modal.section/SnippetPreview.section";
// import { useSelector } from "react-redux";

const Home = () => {
    const [isPrevew, setIsPreview] = useState(false)
    
    return (
        <>
            {isPrevew ?
                <SnippetPreview theme={oneLight} setIsPreview={setIsPreview}/>
                :
                <div className="flex-col md:flex-row flex mt-[5rem] w-full p-5 gap-3">
                    {/* <h1 className="text-[2rem] text-center text-white">Create a Snippet</h1> */}
                    <div className="md:w-1/2 w-full">
                        <CodeSnippet />
                    </div>
                    <div className="md:w-1/2 w-full">
                        <CodeSnippetCard  setIsPreview={setIsPreview}/>
                    </div>
                </div>
            }

        </>
    )
}

export default Home;