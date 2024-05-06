import { NavLink } from "react-router-dom";
import { Logo } from "../../components/Logo/logo";
import "./welcomePage.scss";
import { Button } from "../../components/Button/button";
import XOComponent from "../../components/XOcomponent/xoComponent";

export const WelcomePage = ({}) => {
  const P = ({ t }) => {
    const rand = Math.random() * 100;
    const style = { left: rand + "%" };
    return <XOComponent className="tic-tac-toe" style={style} value={t} />;
  };

  return (
    <NavLink className="WelcomePage" to="/menu">
      <Logo />
      {["X", "O", "X", "O", "X", "O", "X", "O"].map((t, i) => (
        <P key={"p-tic" + i} t={t} />
      ))}
      <Button text={"Lets Play"} />
    </NavLink>
  );
};
