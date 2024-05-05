import "./gamePage.scss";
import { Board } from "../../components/Board/board";
import { BackButton } from "../../components/BackButton/backButton";
import { TitleHolder } from "../../components/TitleHolder/titleHolder";

export const GamePage = ({}) => {
  return (
    <div className="GamePage">
      <BackButton />
      <TitleHolder />
      <Board />
    </div>
  );
};
