import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col, Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LaptopList() {
  const [laptops, setLaptops] = useState([]);
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/Laptops')
      .then(res => {
        setLaptops(res.data);
        setFiltered(res.data);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const value = search.trim().toLowerCase();
    setFiltered(
      laptops.filter(lap =>
        lap.brand.toLowerCase().includes(value) ||
        lap.model.toLowerCase().includes(value)
      )
    );
  };

  return (
    <Container>
      <h2 className="text-center mt-3">Laptop List</h2>
      <Form className="mb-3" onSubmit={handleSearch}>
        <Form.Control
          type="text"
          placeholder="Search by brand or model"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </Form>
      <Row xs={1} sm={2} md={4} className="g-4">
        {filtered.map(lap => (
          <Col key={lap.id}>
            <Card className="text-start h-100">
              <Card.Img variant="top" src={lap.image} style={{ height: 180, objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{lap.brand} {lap.model}</Card.Title>
                <Card.Text>
                  <b>Year:</b> {lap.year}<br />
                  <b>Price:</b> {lap.price}
                </Card.Text>
                <Button variant="primary" onClick={() => navigate(`/laptops/${lap.id}`)}>
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default LaptopList; 