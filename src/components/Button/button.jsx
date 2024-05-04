import { NavLink } from "react-router-dom";
import "./button.scss";

export const Button = ({ text, type = "button", to = "", click = () => { } }) => {
    return (

        <>
            {type === "link" ? <NavLink className={"buttonAndLinkStyle"} to={to} >{text} </NavLink> : <button className={"buttonAndLinkStyle"} onClick={click}>  {text}</button>}
        </>
    )
}