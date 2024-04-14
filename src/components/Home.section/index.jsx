import CodeSnippet from "./CodeSnippet.section";
import { dark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CodeSnippetCard from './CodeSnippetCard.section'
import { useSelector } from "react-redux";

const Home = ({selectedLanguage, snippet}) => { 

    return (
        <div className="flex flex-col items-center justify-center mt-[5rem]">
            <h1 className="text-[2rem] text-center text-white">Create a Snippet</h1>
            <CodeSnippet />
            
            <CodeSnippetCard language={selectedLanguage} theme={oneLight} snippet={snippet} />
        </div>
    )
}

export default Home;