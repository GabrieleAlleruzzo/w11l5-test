import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Uscite = () => {
  const [releases, setReleases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // La risposta ha un campo 'data' che contiene l'array dei risultati
        setReleases(data.data);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false);
      }
    };

    fetchReleases();
  }, []);

  if (loading) {
    return <div>Caricamento in corso...</div>;
  }

  if (error) {
    return <div>Si è verificato un errore: {error.message}</div>;
  }

  return (
    <Container className="my-4">
      <Row>
        <Col>
          <h1 className="text-start">Risultati Ricerca Queen</h1>
        </Col>
      </Row>
      <Row className="d-flex">
        {releases.map((release) => (
          <Col key={release.id} xs={12} sm={6} lg={3} className="mb-4">
            <Card className="p-0 pt-2 text-start bg-transparent border-0 h-100">
              <Card.Img
                className="rounded-0"
                variant="top"
                src={release.album?.cover_medium} // Utilizziamo la copertina media dell'album
                alt={release.title}
                style={{ maxHeight: "200px", objectFit: "cover" }}
              />
              <Card.Body className="p-0">
                <Card.Title
                  className="my-1 fw-bold"
                  style={{ fontSize: "1rem" }}
                >
                  {release.title}
                </Card.Title>
                <Card.Text style={{ fontSize: "0.9rem" }}>
                  {release.artist?.name || "Artista Sconosciuto"}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Uscite;
