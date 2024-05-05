import "./gamePage.scss";
import { Board } from "../../components/Board/board";
import { BackButton } from "../../components/BackButton/backButton";
import { TitleHolder } from "../../components/TitleHolder/titleHolder";
import { UserProfile } from "../../components/UserProfie/userProfile";

export const GamePage = ({}) => {
  return (
    <div className="GamePage">
      <BackButton />
      <TitleHolder>
        <UserProfile />
        <UserProfile />
      </TitleHolder>
      <Board />
    </div>
  );
};
