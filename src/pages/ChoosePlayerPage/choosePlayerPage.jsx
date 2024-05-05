import "./choosePlayerPage.scss";
import {Title} from "../../components/Title/title.jsx"
import { Box } from "../../components/Box/box.jsx";
import { Button } from "../../components/Button/button.jsx";
import { BackButton } from "../../components/BackButton/backButton.jsx";
export const ChoosePlayerPage = ({ }) => {
   const style = {width:"40%" , height:"90%", fontSize:"7.3rem"} 
    return (
        <div className="ChoosePlayerPage">
            <BackButton/>
            <Title text="choose player"/>
            <div className="containerBox">
                <Box value="X" style={style}/>
                <Box value="O" style={style} disable={true}/>
            </div>
            <div className="buttonContainer">
            <Button type="link" to="/solo-game" text={"lets play"}/>
            </div>
        </div>
          
    )
} 