import { BackButton } from "../../components/BackButton/backButton"
import { Button } from "../../components/Button/button"
import { InputCode } from "../../components/InputCode/inputCode"
import { Title } from "../../components/Title/title"
import "./lobbyPage.scss"
export const LobbyPage = ({})=>{
    return (<div className="LobbyPage">
        <BackButton/>   
        <Title/>
        <InputCode/>
        <div className="btnJoinContainer">
        <Button text={"join"}/>
        </div>
        <div className="orContainer"> <p>OR </p> <hr /></div>
        <Button type="link" to={"/create-game"} text={"create a game"} />
    </div>)
}