import { Container, Row, Col } from "react-bootstrap";

const footer = () => {
  return (
    <Container className="text-start">
      <Row>
        <Col>
          <p>Italia | English Uk</p>
        </Col>
      </Row>
      <Row>
        <Col>Copyright 2024 Apple Inc. Tutti i diritti riservati.</Col>
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
