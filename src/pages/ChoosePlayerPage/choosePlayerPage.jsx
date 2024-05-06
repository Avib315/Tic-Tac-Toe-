import "./choosePlayerPage.scss";
import { Title } from "../../components/Title/title.jsx";
import { Box } from "../../components/Box/box.jsx";
import { Button } from "../../components/Button/button.jsx";
import { BackButton } from "../../components/BackButton/backButton.jsx";
import UserInfoContext from "../../Contexts/UserInfoContext.js";
import { useContext } from "react";
export const ChoosePlayerPage = ({}) => {
  const { userInfo, updateUserInfo } = useContext(UserInfoContext);
  const style = { width: "40%", height: "90%" };
  const clickHendlerSelectPlayer = (type) => {
    updateUserInfo({ ...userInfo, userSymbol: type });
};

  return (
    <div className="ChoosePlayerPage">
      <BackButton />
      <Title text="choose player" />
      <div className="containerBox">
        <Box
          value="X"
          style={{...style , fontSize: userInfo?.userSymbol === "X" ? "9.2rem" : "7rem" }}
          disable={userInfo?.userSymbol === "O"}
          clickEvent={() => {
            clickHendlerSelectPlayer("X");
          }}
        />
        <Box
          value="O"
          style={{...style , fontSize: userInfo?.userSymbol === "O" ? "9.2rem" : "7rem" }}
          disable={userInfo?.userSymbol === "X"}
          clickEvent={() => {
            clickHendlerSelectPlayer("O");
          }}
        />
      </div>
      <div className="buttonContainer">
        {userInfo.userSymbol&&<Button type="link" to="/solo-game" text={"lets play"} />}
      </div>
    </div>
  );
};
