import { Container, Row, Col } from "react-bootstrap";

const Player = () => {
  return (
    <div
      id="plyr"
      className="fixed-bottom bg-black m-2 rounded rounded-3 d-block d-lg-none shadow"
    >
      <Container sticky="bottom" className=" py-2">
        <Row>
          <Col className="d-flex justify-content-between m-1 text-light ">
            <div>
              <i className="bi bi-music-note-beamed border border-1 border-white p-1 rounded-2"></i>
            </div>{" "}
            <div>
              <i className="bi bi-play-circle-fill text-light"></i>{" "}
              <i className="bi bi-fast-forward-circle-fill text-light"></i>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Player;
