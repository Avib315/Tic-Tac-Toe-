import { useEffect, useState } from "react";
import "./board.scss";
import createBoard from "../../functions/boardCreator";
import { Box } from "../Box/box";
export const Board = () => {
  const [boxs, setBoxs] = useState(createBoard());
  console.log(boxs);
  const [turn, setTurn] = useState(0);
  const clickHendler = (b) => {
    let input = turn % 2 == 0 ? "x" : "o";
    setBoxs({ ...boxs, [b]: { input: input } });
    setTurn(turn + 1);
  };
  return (
    <div className="Borad">
      {boxs.arr.map((b) => (
        <Box
          key={"box-" + b}
          disable={!true}
          value={boxs[b].input}
          clickEvent={() => {
            clickHendler(b);
          }}
        />
      ))}
    </div>
  );
};
