import React from "react";

interface IButtonProps {
  children: React.ReactChild | React.ReactChild[];
  onClick?: (e: React.MouseEvent) => void;
}

const Button: React.FC<IButtonProps> = ({ children, onClick }): JSX.Element => {
  return (
    <button onClick={(e: React.MouseEvent) => onClick && onClick(e)}>{children}</button>
  );
};

export default Button;
