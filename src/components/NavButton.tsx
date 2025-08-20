import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

const NavButton = ({ children, onClick }: Props) => {
  return (
    <li className={"btn nav-button"} onClick={onClick}>
      {children}
    </li>
  );
};

export default NavButton;
