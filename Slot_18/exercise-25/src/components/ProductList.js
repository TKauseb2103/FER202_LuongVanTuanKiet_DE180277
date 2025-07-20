import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';
import { Card, Button, Row, Col } from 'react-bootstrap';

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Product List</h2>
      <Row>
        {products.map((product) => (
          <Col md={4} className="mb-3" key={product.id}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">${product.price}</Card.Subtitle>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>
                  <strong>Catalogs:</strong> {product.catalogs.join(', ')}
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList; 