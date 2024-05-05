import "./titleHolder.scss";

export const TitleHolder = ({ childern }) => {
  return (
    <div className="titleHolder">
      <div className="titleHolderChild">{childern}</div>
    </div>
  );
};
