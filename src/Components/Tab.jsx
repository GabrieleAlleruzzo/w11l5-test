import { Container, Row, Col } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

function tab(props) {
  return (
    <Container>
      <Row>
        <Col>
          <h5 className=" fw-light p-2 rounded bg-sit">{props.title}</h5>
        </Col>
      </Row>
    </Container>
  );
}

export default tab;
