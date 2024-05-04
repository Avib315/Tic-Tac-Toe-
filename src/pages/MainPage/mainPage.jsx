import "./mainPage.scss";
import {Button} from "../../components/Button/button.jsx"
import { Logo } from "../../components/Logo/logo.jsx";
export const MainPage = ({ }) => {
    return (
        <div className="MainPage">
            <Logo/>
            <div className="btnContainer">
            <Button text="Play Solo" type="link" to="/solo-game" />
            <Button text="play with a friend" type="link" to="/friends-game" />
            </div>
        </div>
          
    )
}