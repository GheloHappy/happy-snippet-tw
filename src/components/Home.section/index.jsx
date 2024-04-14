import CodeSnippet from "./CodeSnippet.section";
import { dark, oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CodeSnippetCard from './CodeSnippetCard.section'
import { useState } from "react";

const Home = () => {
    const [code_snippet, setCodeSnippet] = useState("")
    const [language, setLanguage] = useState("javascript")
    return (
        <div className="flex flex-col items-center justify-center mt-[5rem]">
            <h1 className="text-[2rem] text-center text-white">Create a Snippet</h1>
            <CodeSnippet setCodeSnippet={setCodeSnippet} setLanguage={setLanguage}/>

            <CodeSnippetCard language={language} theme={oneLight} snippet={code_snippet} />
        </div>
    )
}

export default Home;