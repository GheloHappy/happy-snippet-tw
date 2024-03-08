import CodeSnippet from "./CodeSnippet.section";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-[5rem]">
            <h1 className="text-[2rem] text-center text-white">Create a Code Snippet</h1>
            <CodeSnippet />
        </div>
    )
}

export default Home;