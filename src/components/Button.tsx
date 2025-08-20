import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  colour?: string;
  onClick: () => void;
}

const Button = ({ children, onClick, colour = "primary" }: Props) => {
  return (
    <div className={"btn btn-" + colour} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
