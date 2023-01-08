import { Navbar, Nav, NavLink, NavItem, NavbarBrandn } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="sm" className="barra">
      <NavLink className="deli" eventKey="1" as={Link} to="/">
        Inicio
      </NavLink>
      <NavLink className="deli" eventKey="2" as={Link} to="/contacto">
        Contáctanos
      </NavLink>
      <NavLink className="deli" eventKey="3" as={Link} to="/">
        Programas Virtuales
      </NavLink>
    </Navbar>
  );
};
export default NavigationBar;
