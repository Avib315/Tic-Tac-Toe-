import "./gamePage.scss";
import {Board} from "../../components/Board/board"
import { BackButton } from "../../components/BackButton/backButton";

export const GamePage = ({ }) => {
    return (
        <div className="GamePage">
             <BackButton />
            <Board/>
        </div>)
}