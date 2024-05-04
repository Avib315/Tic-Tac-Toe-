import "./mainPage.scss";
import {Button} from "../../components/Button/button.jsx"
import { Logo } from "../../components/Logo/logo.jsx";
export const MainPage = ({}) => {
    return (
        <div className="MainPage">
            <Logo/>
            <div className="btnContainer">
            <Button text="Play Solo" type="link" to="/choose-player" />
            <Button text="play with a friend" type="link" to="/lobby-game" />
            </div>
        </div>
          
    )
}