import React from "react";

const Button = ({ onClickLoad }) => {
  return (
    <div className="Button" onClick={onClickLoad}>
      Load more
    </div>
  );
};

export default Button;
