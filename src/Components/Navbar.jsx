import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar2 from "./Navbar2";

function NavScrollExample() {
  return (
    <Navbar expand="lg" style={{ background: "#2e2e2e" }}>
      <Container fluid className="d-flex justify-content-between">
        <Navbar2 />
        //a 30 min dalla consegna sono riuscito a integrare questo bottone
        OffCanva
        <Navbar.Brand href="#">
          <img src="./src/assets/music.svg" alt="apple logo" />
        </Navbar.Brand>
        <p className="m-0" style={{ color: " #fa586a" }}>
          {" "}
          accedi{" "}
        </p>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
