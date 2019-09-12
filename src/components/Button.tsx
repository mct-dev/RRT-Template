import React from "react";

interface IButtonProps {
  children: React.ReactChild | React.ReactChild[];
  onClick?: (e: React.MouseEvent) => void;
}

const Button: React.FC<IButtonProps> = ({ children, onClick }): JSX.Element => {

  const handleClick = (e: React.MouseEvent) => onClick && onClick(e);

  return (
    <button onClick={handleClick}>{children}</button>
  );
};

export default Button;
