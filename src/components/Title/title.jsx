import "./title.scss"

export const Title = ({text = "join to a game"})=>{
    return (<h2 className="Title">{text} </h2>)
}