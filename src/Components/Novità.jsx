import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const novita = () => {
  return (
    <Container className="my-4">
      <Row>
        <Col>
          <h1 className="text-start">Novità</h1>
          <hr />
        </Col>
        <Row className="d-flex ">
          <Col>
            {/* prima card*/}
            <Card className="p-0  pt-2 text-start bg-transparent border-0">
              <Card.Body className="p-0">
                <Card.Title
                  className="ps-2"
                  style={{ fontSize: "12px", fontWeight: "bold" }}
                >
                  NUOVA STAZIONE RADIO
                </Card.Title>
                <Card.Text className="ps-2">
                  Rilassati, Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit.
                </Card.Text>
                <Card.Img
                  className="rounded-0"
                  variant="top"
                  src="../src\assets\img\1a.png"
                  alt="thumbnail-chill"
                />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {/* seconda card*/}
            <Card className="p-0  pt-2 text-start bg-transparent border-0">
              <Card.Body className="p-0">
                <Card.Title
                  className="ps-2"
                  style={{ fontSize: "12px", fontWeight: "bold" }}
                >
                  NUOVA STAZIONE RADIO
                </Card.Title>
                <Card.Text className="ps-2">
                  Musica latina Lorem, ipsum dolor sit elit.
                </Card.Text>
                <Card.Img
                  className="rounded-0"
                  variant="top"
                  src="../src\assets\img\1b.png"
                  alt="thumbnail-chill"
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default novita;
