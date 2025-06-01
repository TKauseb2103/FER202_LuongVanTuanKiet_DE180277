import React from 'react';
import { Card } from 'react-bootstrap';

const MenuCard = ({ item }) => {
  return (
    <Card className="menu-card">
      <Card.Img variant="top" src={item.image} alt={item.title} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text className="price">${item.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MenuCard;