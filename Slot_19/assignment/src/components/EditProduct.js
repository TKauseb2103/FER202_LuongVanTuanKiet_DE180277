import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Spinner
} from 'react-bootstrap';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    currentPrice: '',
    image: ''
  });

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(`http://localhost:3000/products/${id}`);
      const product = response.data;

      setFormData({
        name: product.name,
        description: product.description,
        price: product.price,
        currentPrice: product.currentPrice,
        image: product.image
      });
    } catch (err) {
      const errorMessage = err.response
        ? `HTTP error! status: ${err.response.status} - ${err.response.statusText}`
        : `Network error: ${err.message}`;
      setError(`Failed to fetch product: ${errorMessage}`);
      console.error('Error fetching product:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.description || !formData.price || !formData.currentPrice) {
      alert('Please fill in all fields');
      return;
    }

    try {
      setSaving(true);
      setError(null);

      const updatedProduct = {
        ...formData,
        id: id,
        image: formData.image
      };

      await axios.put(`http://localhost:3000/products/${id}`, updatedProduct);

      navigate(`/product/${id}`);
    } catch (err) {
      const errorMessage = err.response
        ? `HTTP error! status: ${err.response.status} - ${err.response.statusText}`
        : `Network error: ${err.message}`;
      setError(`Failed to update product: ${errorMessage}`);
      console.error('Error updating product:', err);
    } finally {
      setSaving(false);
    }
  };

  const handleBackHome = () => {
    navigate('/');
  };

  if (loading) {
    return (
      <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '400px' }}>
        <Spinner animation="border" variant="primary" size="lg" />
        <p className="mt-3 text-muted">Loading product...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger" className="text-center">
          <Alert.Heading>Error</Alert.Heading>
          <p>{error}</p>
          <Button variant="outline-danger" onClick={fetchProduct}>
            Try Again
          </Button>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="my-4">
      <div className="p-4" style={{ backgroundColor: '#2c3e50', borderRadius: '10px' }}>
        <h2 className="text-center mb-4 text-white">Edit Product</h2>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={2} className="d-flex align-items-center">
              <Form.Label className="text-white mb-0 text-end w-100 pe-3">Name:</Form.Label>
            </Col>
            <Col md={10}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder=""
                  style={{ borderRadius: '5px', border: '2px solid #34495e' }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={2} className="d-flex align-items-center">
              <Form.Label className="text-white mb-0 text-end w-100 pe-3">Description:</Form.Label>
            </Col>
            <Col md={10}>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  placeholder=""
                  style={{ borderRadius: '5px', border: '2px solid #34495e' }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={2} className="d-flex align-items-center">
              <Form.Label className="text-white mb-0 text-end w-100 pe-3">Price:</Form.Label>
            </Col>
            <Col md={10}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                  placeholder=""
                  style={{ borderRadius: '5px', border: '2px solid #34495e' }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={2} className="d-flex align-items-center">
              <Form.Label className="text-white mb-0 text-end w-100 pe-3">Current Price:</Form.Label>
            </Col>
            <Col md={10}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="currentPrice"
                  value={formData.currentPrice}
                  onChange={handleInputChange}
                  required
                  placeholder=""
                  style={{ borderRadius: '5px', border: '2px solid #34495e' }}
                />
              </Form.Group>
            </Col>
          </Row>

          <div className="text-center mt-4">
            <Button
              variant="primary"
              onClick={handleBackHome}
              size="lg"
              className="me-3"
              style={{ borderRadius: '5px', padding: '10px 30px' }}
            >
              Back Home
            </Button>
            <Button
              variant="danger"
              type="submit"
              size="lg"
              disabled={saving}
              style={{ borderRadius: '5px', padding: '10px 30px' }}
            >
              {saving ? 'Saving...' : 'Save Product'}
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default EditProduct; 