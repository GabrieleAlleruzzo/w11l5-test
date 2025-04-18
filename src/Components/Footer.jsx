import { Container, Row, Col } from "react-bootstrap";

const footer = () => {
  return (
    <Container className="text-start pt-3 pb-5 px-5" id="bg-f">
      <Row>
        <Col>
          <p>Italia | English Uk</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Copyright 2024 Apple Inc. Tutti i diritti riservati.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Condizioni | Appele Music | Avviso | Supporto | Feedback</p>
        </Col>
      </Row>
    </Container>
  );
};

export default footer;
