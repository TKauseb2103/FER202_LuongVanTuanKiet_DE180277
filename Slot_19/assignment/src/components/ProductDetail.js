import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Container, 
  Row, 
  Col, 
  Button, 
  Alert, 
  Spinner 
} from 'react-bootstrap';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.get(`http://localhost:3000/products/${id}`);
      setProduct(response.data);
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

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

  const handleBackHome = () => {
    navigate('/');
  };

  const calculateDiscount = () => {
    if (!product) return 0;
    const originalPrice = parseFloat(product.price.replace(/\./g, ''));
    const currentPrice = parseFloat(product.currentPrice.replace(/\./g, ''));
    const discount = ((originalPrice - currentPrice) / originalPrice) * 100;
    return Math.round(discount);
  };

  if (loading) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center" 
           style={{minHeight: '100vh', backgroundColor: '#2c3e50', color: 'white'}}>
        <Spinner animation="border" variant="light" size="lg" />
        <p className="mt-3">Loading product details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center" 
           style={{minHeight: '100vh', backgroundColor: '#2c3e50', color: 'white'}}>
        <Alert variant="danger" className="text-center">
          <Alert.Heading>Error</Alert.Heading>
          <p>{error}</p>
          <Button variant="outline-danger" onClick={fetchProduct}>
            Try Again
          </Button>
        </Alert>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center" 
           style={{minHeight: '100vh', backgroundColor: '#2c3e50', color: 'white'}}>
        <Alert variant="warning" className="text-center">
          <h4>Product not found</h4>
        </Alert>
      </div>
    );
  }

  return (
    <div style={{backgroundColor: '#2c3e50', minHeight: '100vh', color: 'white', padding: '40px 0'}}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <h1 className="text-center text-white mb-5" style={{fontSize: '2.5rem', fontWeight: 'bold'}}>
              {product.name}
            </h1>

            <Row className="justify-content-center mb-4">
              <Col md={6}>
                <div className="text-center">
                  <div 
                    style={{
                      backgroundColor: 'white',
                      padding: '20px',
                      borderRadius: '15px',
                      display: 'inline-block'
                    }}
                  >
                    <img 
                      src={`/image/${product.image}`}
                      alt={product.name}
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                        maxHeight: '300px',
                        objectFit: 'contain'
                      }}
                      onError={(e) => {
                        e.target.src = '/image/default-laptop.png';
                      }}
                    />
                  </div>
                </div>
              </Col>
            </Row>

            <div className="text-center mb-4">
              <h4 className="text-white mb-3" style={{fontSize: '1.5rem'}}>
                {product.description}
              </h4>
            </div>

            <div className="text-center mb-4">
              <div className="mb-2">
                <span className="text-white" style={{fontSize: '1.3rem'}}>
                  Price: 
                </span>
                <span className="text-decoration-line-through ms-2" style={{fontSize: '1.3rem', color: '#bdc3c7'}}>
                  {product.price} đ
                </span>
              </div>
              
              <div className="mb-3">
                <span className="text-white" style={{fontSize: '1.3rem'}}>
                  Current Price: 
                </span>
                <span className="text-warning fw-bold ms-2" style={{fontSize: '1.3rem'}}>
                  {product.currentPrice} đ
                </span>
              </div>

              <div className="mb-4">
                <span className="text-white" style={{fontSize: '1.3rem'}}>
                  Discount: {calculateDiscount()} %
                </span>
              </div>
            </div>

            <div className="text-center">
              <Button 
                variant="primary" 
                onClick={handleBackHome}
                size="lg" 
                className="me-3"
                style={{
                  borderRadius: '8px', 
                  padding: '12px 30px',
                  fontSize: '1.1rem'
                }}
              >
                Back Home
              </Button>
              <Button 
                variant="danger" 
                onClick={handleEdit}
                size="lg"
                style={{
                  borderRadius: '8px', 
                  padding: '12px 30px',
                  fontSize: '1.1rem'
                }}
              >
                Edit
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail; 