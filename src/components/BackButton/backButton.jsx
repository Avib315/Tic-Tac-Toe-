import "./backButton.scss"
import backIcon from "../../assets/img/back-img.svg"
import { NavLink } from "react-router-dom"
export const BackButton = ({})=>{
    return (<NavLink to={"/manu"} className={"BackButton"}>
        <img src={backIcon} alt="back-btn" />
    </NavLink>)
}