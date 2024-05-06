import "./backButton.scss"
import backIcon from "../../assets/img/back-img.svg"
import { NavLink } from "react-router-dom"
export const BackButton = ({})=>{
    return (<NavLink to={"/menu"} className={"BackButton"}>
        <img src={backIcon} alt="back-btn" />
    </NavLink>)
}