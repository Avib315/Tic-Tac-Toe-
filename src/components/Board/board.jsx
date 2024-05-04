import { useEffect, useState } from "react"
import "./board.scss"
import createBoard from "../../functions/boardCreator"
export const Board = () => {
    const [boxs, setBoxs] = useState(createBoard())
    const [turn, setTurn] = useState(0)
    const clickHendler = (b) => {
        let input = turn % 2 == 0 ? "x" : "o"
        setBoxs({ ...boxs, [b]: { input: input } })
        setTurn(turn + 1)
    }
    return (
        <div className="Borad">
            {boxs.arr.map(b => <div key={"box-" + b} className="emptyBox" onClick={()=>{clickHendler(b)}} >{boxs[b].input}</div>)}
        </div>
    )
}
