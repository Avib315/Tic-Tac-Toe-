import { BackButton } from "../../components/BackButton/backButton";
import Loading from "../../components/Loading/loading";
import "./watingForGame.scss";

export const WatingForGame = ({}) => {
  return (
    <div className="watingForGame">
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
