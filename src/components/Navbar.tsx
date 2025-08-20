import NavButton from "./NavButton";
import NavDropdownButton from "./NavDropdownButton";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="my-navbar">
      <ul className="my-navbar-ul">
        <NavButton onClick={() => navigate("/")}>
          <Link to="/">Home</Link>
        </NavButton>
        <NavButton onClick={() => navigate("/skills")}>
          <Link to="/skills">Skills</Link>
        </NavButton>
        <NavDropdownButton onClick={() => navigate("/projects")}>
          Projects
        </NavDropdownButton>
        <NavButton onClick={() => navigate("/about")}>About Me</NavButton>
        <NavButton onClick={() => navigate("/contact")}>Contact</NavButton>
      </ul>
    </nav>
  );
};

export default Navbar;
