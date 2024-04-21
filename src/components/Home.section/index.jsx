import CodeSnippet from "./CodeSnippet.section";
import { dark, oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CodeSnippetCard from './CodeSnippetCard.section'
import { useState } from "react";
import SnippetPreview from "./CodeSnippet.Modal.section/SnippetPreview.section";
// import { useSelector } from "react-redux";

const Home = () => {
    const [code_snippet, setCodeSnippet] = useState("")
    const [language, setLanguage] = useState("javascript")
    const [isPrevew, setIsPreview] = useState(false)

    return (
        <>
            {isPrevew ?
                <SnippetPreview language={language} theme={oneLight} setIsPreview={setIsPreview}/>
                :
                <div className="flex mt-[5rem] w-full p-5 gap-3">
                    {/* <h1 className="text-[2rem] text-center text-white">Create a Snippet</h1> */}
                    <div className="w-1/2">
                        <CodeSnippet setCodeSnippet={setCodeSnippet} setLanguage={setLanguage} 
                        />
                    </div>
                    <div className="w-1/2">
                        <CodeSnippetCard language={language} theme={oneLight} snippet={code_snippet} 
                        setIsPreview={setIsPreview}/>
                    </div>
                </div>
            }

        </>
    )
}

export default Home;