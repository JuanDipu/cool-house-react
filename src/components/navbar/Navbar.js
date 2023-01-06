import { Navbar, Nav, NavLink, NavItem, NavbarBrandn } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="light">
        <Nav>
          <NavLink eventKey="1" as={Link} to="/">
            Inicio
          </NavLink>
          <NavLink eventKey="2" as={Link} to="/contacto">
            Contáctanos
          </NavLink>
        </Nav>
      </Navbar>
    </>
    // <div className="barra">
    //   <a className="deli1">Inicio</a>
    //   <a className="deli2">Programas Virtuales</a>
    //   <a className="deli3">Método Cool House</a>
    //   <a className="delis4">Contáctanos</a>
    // </div>
  );
};
export default NavigationBar;
