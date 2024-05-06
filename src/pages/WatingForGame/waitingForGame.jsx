import { BackButton } from "../../components/BackButton/backButton";
import Loading from "../../components/Loading/loading";
import "./waitingForGame.scss";

export const WaitingForGame = ({}) => {
  return (
    <div className="waitingForGame">
      <BackButton />
      <div className="loadingAndText">
        <Loading />
        <div className="textHolder">
          <div>WAITING...</div>
          <div>JOIN TO THE GAME</div>
        </div>
      </div>
    </div>
  );
};
