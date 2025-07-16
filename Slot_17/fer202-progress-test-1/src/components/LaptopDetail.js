import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Button, Container, Alert } from 'react-bootstrap';
import axios from 'axios';

function LaptopDetail() {
  const { id } = useParams();
  const [laptop, setLaptop] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/Laptops')
      .then(res => {
        const found = res.data.find(lap => String(lap.id) === String(id));
        if (found) {
          setLaptop(found);
        } else {
          setNotFound(true);
        }
      })
      .catch(() => setNotFound(true));
  }, [id]);

  if (notFound) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">404 Not Found: Laptop does not exist.</Alert>
        <Button onClick={() => navigate('/laptops')}>Back to Laptop List</Button>
      </Container>
    );
  }

  if (!laptop) return null;

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <Card style={{ width: 350 }}>
        <Card.Img variant="top" src={laptop.image} style={{ height: 180, objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
          <Card.Text>
            <b>Year:</b> {laptop.year}<br />
            <b>Price:</b> {laptop.price}<br />
            <b>Description:</b> {laptop.description || ''}
          </Card.Text>
          <Button variant="primary" onClick={() => navigate('/laptops')}>
            Back to Laptop List
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}


export default LaptopDetail; 