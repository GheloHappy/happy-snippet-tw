import CodeSnippetCard from "../../CodeSnippetCard.section"

const SnippetPreview = ({language, theme,code_snippet}) => {
    return(
        <div className="w-full h-screen absolute overflow-hidden">
            <div className="w-full h-full bg-black opacity-25">

            </div>
            <CodeSnippetCard language={language} style={theme} snippet={code_snippet}/>
        </div>
    )
}

export default SnippetPreview