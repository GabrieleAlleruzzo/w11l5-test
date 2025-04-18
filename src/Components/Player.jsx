import { Container, Row, Col } from "react-bootstrap";

const player = () => {
  return (
    <div className="fixed-bottom bg-dark m-2 border border-1 rounded rounded-3">
      <Container sticky="bottom">
        <Row>
          <Col className="d-flex justify-content-between m-1 text-light">
            <div>
              <i class="bi bi-music-note-beamed"></i>
            </div>{" "}
            <div>
              <i class="bi bi-play-circle-fill text-light"></i>{" "}
              <i class="bi bi-fast-forward-circle-fill text-light"></i>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default player;
