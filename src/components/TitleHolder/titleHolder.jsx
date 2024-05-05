import "./titleHolder.scss";

export const TitleHolder = ({ children }) => {
  return (
    <div className="titleHolder">
      {children}
      <div className="titleHolderChild"></div>
    </div>
  );
};
