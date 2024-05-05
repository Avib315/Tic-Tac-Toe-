import XOComponent from "../XOcomponent/xoComponent";
import "./userProfile.scss";
export const UserProfile = ({
  wins = "13",
  type = "X",
  userName = "Mushe",
  imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXoM1S2fGa_e-5h0Vd9ZG9KLPCZ7vXnqRUs30DT9VmFg&s",
}) => {
  return (
    <div className="UserProfile">
      <img src={imgSrc} alt="userImg" />
      <p className="containerText">
        <div>
          <span className="xoContainer">
            <XOComponent value={type} />
          </span>
          <span className="winsContainer">wins: {wins} </span>
        </div>
      </p>
      <p className="userName">{userName}</p>
    </div>
  );
};
