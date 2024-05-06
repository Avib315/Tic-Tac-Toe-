import XOComponent from "../XOcomponent/xoComponent";
import "./box.scss";
export const Box = ({ disable = false, value = "X", clickEvent, style }) => {
  return (
    <div
      className={`Box ${disable ? "disable" : ""}`}
      style={style}
      onClick={clickEvent}
    >
      {!disable && value && <XOComponent value={value} />}
      {disable && <p className="disable-value">{value}</p>}
    </div>
  );
};
