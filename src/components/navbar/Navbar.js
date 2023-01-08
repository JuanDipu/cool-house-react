import { Navbar, Nav, NavLink, NavItem, NavbarBrandn } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";

const NavigationBar = () => {
  return (
    <div className="barra">
      <a className="deli" eventKey="1" as={Link} to="/">
        Inicio
      </a>
      <a className="deli">Programas Virtuales</a>
      <a className="deli">Método Cool House</a>
      <a className="delis">Contáctanos</a>
    </div>
  );
};
export default NavigationBar;
