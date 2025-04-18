import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const novita = () => {
  return (
    <Container className="my-4">
      <Row>
        <Col>
          <h5 className="text-start text-white">Nuovi episodi radio </h5>
        </Col>
        <Row className="d-flex justify-content-between">
          <Col sx={12} sm={6} lg={2}>
            {/* prima card*/}
            <Card className="p-0  pt-2 text-start bg-transparent border-0">
              <Card.Body className="p-0">
                <Card.Img
                  className="rounded-0"
                  variant="top"
                  src="../src\assets\img\2a.png"
                  alt="thumbnail"
                />
                <Card.Title
                  className="my-1 text-white"
                  style={{ fontSize: "10px", fontWeight: "bold" }}
                >
                  Lorem Ipsum Titolo
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sx={12} sm={6} lg={2}>
            {/* seconda card*/}
            <Card className="p-0  pt-2 text-start bg-transparent border-0">
              <Card.Body className="p-0">
                <Card.Img
                  className="rounded-0"
                  variant="top"
                  src="../src\assets\img\2b.png"
                  alt="thumbnail"
                />
                <Card.Title
                  className="my-1"
                  style={{ fontSize: "10px", fontWeight: "bold" }}
                >
                  Lorem Ipsum Titolo
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sx={12} sm={6} lg={2}>
            {/* terza card*/}
            <Card className="p-0  pt-2 text-start bg-transparent border-0">
              <Card.Body className="p-0">
                <Card.Img
                  className="rounded-0"
                  variant="top"
                  src="../src\assets\img\2c.png"
                  alt="thumbnail"
                />
                <Card.Title
                  className="my-1"
                  style={{ fontSize: "10px", fontWeight: "bold" }}
                >
                  Lorem Ipsum Titolo
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sx={12} sm={6} lg={2}>
            {/* quarta card*/}
            <Card className="p-0  pt-2 text-start bg-transparent border-0">
              <Card.Body className="p-0">
                <Card.Img
                  className="rounded-0"
                  variant="top"
                  src="../src\assets\img\2d.png"
                  alt="thumbnail"
                />
                <Card.Title
                  className="my-1"
                  style={{ fontSize: "10px", fontWeight: "bold" }}
                >
                  Lorem Ipsum Titolo
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col sx={12} sm={6} lg={2}>
            {/* quinta card*/}
            <Card className="p-0  pt-2 text-start bg-transparent border-0">
              <Card.Body className="p-0">
                <Card.Img
                  className="rounded-0"
                  variant="top"
                  src="../src\assets\img\2e.png"
                  alt="thumbnail"
                />
                <Card.Title
                  className="my-1"
                  style={{ fontSize: "10px", fontWeight: "bold" }}
                >
                  Lorem Ipsum Titolo
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default novita;
