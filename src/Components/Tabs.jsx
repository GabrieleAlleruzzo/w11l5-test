import { Container, Row, Col } from "react-bootstrap";
import Tab from "./Tab";

const tabs = () => {
  return (
    <Container className="d-flex flex-row text-start mb-4">
      <Row>
        <Col
          xs={12}
          md={6}
          lg={4}
          className="d-flex flex-row flex-wrap justify-content-between p-0"
        >
          <Tab title="Esplora per genere" />
          <Tab title="Decenni" />
          <Tab title="Attività e stati d'animo" />
        </Col>
        <Col
          xs={12}
          md={6}
          lg={4}
          className="d-flex flex-row flex-wrap justify-content-between p-0"
        >
          <Tab title="Worldide" />
          <Tab title="Classifiche" />
          <Tab title="Audio spaziale" />
        </Col>
        <Col
          xs={12}
          md={6}
          lg={4}
          className="d-flex flex-row flex-wrap justify-content-between p-0"
        >
          <Tab title="Video musicali" />
          <Tab title="Nuovi artisti" />
          <Tab title="Hit del passato" />
        </Col>
      </Row>
    </Container>

    //a 10 min dalla consegna ho soperto che esistono le tabs react-bootstrap sotto il nome di custom-toggle
  );
};

export default tabs;
