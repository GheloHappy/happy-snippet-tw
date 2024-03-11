import CodeSnippet from "./CodeSnippet.section";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-[5rem]">
            <h1 className="text-[2rem] text-center text-white">Create a Snippet</h1>
            <CodeSnippet />
        </div>
    )
}

export default Home;