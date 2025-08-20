import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

const NavDropdownButton = ({ children, onClick }: Props) => {
  return (
    <li className={"btn nav-button dd"} onClick={onClick}>
      <div>{children} ⌄</div>
      <ul className="dd-menu">
        <li>
          <a href="/renocalculators">Renovation Calculators</a>
        </li>
        <li>
          <a href="#">Nhill Silos</a>
        </li>
        <li>
          <a href="#">PT Maps</a>
        </li>
      </ul>
    </li>
  );
};

export default NavDropdownButton;
