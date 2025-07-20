import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions';
import { useNavigate } from 'react-router-dom';
import { Card, Form, Button } from 'react-bootstrap';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [catalogs, setCatalogs] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now().toString(),
      name,
      price: parseFloat(price),
      description,
      catalogs: catalogs.split(',').map((c) => c.trim()),
    };
    dispatch(addProduct(newProduct));
    navigate('/');
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Add New Product</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCatalogs">
            <Form.Label>Catalogs (comma separated)</Form.Label>
            <Form.Control
              type="text"
              value={catalogs}
              onChange={(e) => setCatalogs(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Add Product
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ProductForm; 