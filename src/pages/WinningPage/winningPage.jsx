import "./winningPage.scss";
import { Board } from "../../components/Board/board";
import { BackButton } from "../../components/BackButton/backButton";
import { TitleHolder } from "../../components/TitleHolder/titleHolder";
import { UserProfile } from "../../components/UserProfie/userProfile";
import { Button } from "../../components/Button/button";

export const WinningPage = ({ winnerName = "liron" }) => {
  return (
    <div className="winningPage">
      <BackButton />
      <TitleHolder>
        <UserProfile />
        {/* <UserProfile /> */}
        <div className="winnerName">{winnerName} WIN!!</div>
      </TitleHolder>
      <Board />
      <div className="btnWinnerHolder">
        <Button text={"play again"} />
        <Button text={"back to main"} to="/" type="link" />
      </div>
    </div>
  );
};
