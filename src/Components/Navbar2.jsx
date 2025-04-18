import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{ backgroundColor: "#fa586a", border: "none" }}
      >
        menu
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src="./src/assets/music.svg" alt="apple logo" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body
          className="bg-dark d-flex flex-column 
"
        >
          <a href="#" className="text-decoration-none text-white my-1">
            <i class="bi bi-house-door " style={{ color: " #fa586a" }}></i> Home
          </a>
          <a href="#" className="text-decoration-none text-white my-1">
            <i class="bi bi-ui-radios-grid " style={{ color: " #fa586a" }}></i>{" "}
            Novità{" "}
          </a>
          <a href="#" className="text-decoration-none text-white my-1">
            <i class="bi bi-broadcast " style={{ color: " #fa586a" }}></i> Radio{" "}
          </a>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;
