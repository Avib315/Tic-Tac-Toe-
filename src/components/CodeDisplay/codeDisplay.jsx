import "./codeDisplay.scss"
export const CodeDisplay = ({code = "649117"})=>{
    return (<div className="CodeDisplay">
        <p className="title">Your Code</p>
        <p className="codeP">{code}</p>
        </div>)
} 