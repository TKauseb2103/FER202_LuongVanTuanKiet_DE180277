import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Form,
    Alert,
    Spinner,
    Table,
} from 'react-bootstrap';

const ProductList = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        currentPrice: ''
    });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await axios.get('http://localhost:3000/products');

            setProducts(response.data);
        } catch (err) {
            const errorMessage = err.response
                ? `HTTP error! status: ${err.response.status} - ${err.response.statusText}`
                : `Network error: ${err.message}`;
            setError(`Failed to fetch products: ${errorMessage}`);
            console.error('Error fetching products:', err);
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

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.description || !formData.price || !formData.currentPrice) {
            alert('Please fill in all fields');
            return;
        }

        const newProduct = {
            id: (products.length + 1).toString(),
            name: formData.name,
            description: formData.description,
            price: formData.price,
            currentPrice: formData.currentPrice,
            image: 'default-laptop.png'
        };

        setProducts(prev => [...prev, newProduct]);

        setFormData({
            name: '',
            description: '',
            price: '',
            currentPrice: ''
        });
        setShowForm(false);
    };

    const handleEdit = (productId) => {
        navigate(`/edit/${productId}`);
    };

    const handleViewDetails = (productId) => {
        navigate(`/product/${productId}`);
    };

    const handleDelete = (productId) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            setProducts(prev => prev.filter(product => product.id !== productId));
        }
    };

    if (loading) {
        return (
            <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '400px' }}>
                <Spinner animation="border" variant="primary" size="lg" />
                <p className="mt-3 text-muted">Loading products...</p>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="mt-5">
                <Alert variant="danger" className="text-center">
                    <Alert.Heading>Error</Alert.Heading>
                    <p>{error}</p>
                    <Button variant="outline-danger" onClick={fetchProducts}>
                        Try Again
                    </Button>
                </Alert>
            </Container>
        );
    }

    return (
        <div style={{ backgroundColor: '#0E0E0EFF', minHeight: '100vh', color: 'white', padding: '40px 0' }}>
            <Container className="my-4">
                <Row className="mb-4 pb-3 border-bottom">
                    <Col>
                        <div className="d-flex justify-content-center align-items-center flex-wrap">
                            <h1 className="text-white  mb-0">Product List</h1>
                        </div>
                    </Col>
                </Row>

                {products.length === 0 ? (
                    <Alert variant="info" className="text-center py-5">
                        <h4>No products found.</h4>
                    </Alert>
                ) : (
                    <>
                        <Row className="g-4 mb-5">
                            {products.map((product) => (
                                <Col key={product.id} lg={3} md={6} sm={12}>
                                    <Card className="h-100 shadow-sm">
                                        <div style={{ height: '300px', overflow: 'hidden', backgroundColor: '#f8f9fa' }}>
                                            <Card.Img
                                                variant="top"
                                                src={`/image/${product.image}`}
                                                alt={product.name}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                }}
                                                onError={(e) => {
                                                    e.target.src = '/image/default-laptop.png';
                                                }}
                                            />
                                        </div>

                                        <Card.Body className="d-flex flex-column">
                                            <Card.Title className="h6 text-start">{product.name}</Card.Title>
                                            <Card.Text
                                                className="text-muted text-start small flex-grow-1"
                                                style={{
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 3,
                                                    WebkitBoxOrient: 'vertical'
                                                }}
                                            >
                                                {product.description}
                                            </Card.Text>

                                            <div className="mb-3">
                                                <div className="text-decoration-line-through text-muted small">
                                                    {product.price} đ
                                                </div>
                                                <div className="text-danger fw-bold">
                                                    {product.currentPrice} đ
                                                </div>
                                            </div>

                                            <div className="d-flex gap-2">
                                                <Button
                                                    variant="danger"
                                                    size="sm"
                                                    className="mx-auto"
                                                    onClick={() => handleViewDetails(product.id)}
                                                >
                                                    View Details
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>

                        <div className="mb-4 p-4" style={{ backgroundColor: '#0E0E0EFF', borderRadius: '10px' }}>
                            <h2 className="text-center mb-4 text-white">Add Product</h2>
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col md={2} className="d-flex align-items-center">
                                        <Form.Label className="text-white mb-0 text-center w-100 pe-3">Name:</Form.Label>
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
                                        <Form.Label className="text-white mb-0 text-center w-100 pe-3">Description:</Form.Label>
                                    </Col>
                                    <Col md={10}>
                                        <Form.Group className="mb-3">
                                            <Form.Control
                                                type="text"
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
                                        <Form.Label className="text-white mb-0 text-center w-100 pe-3">Price:</Form.Label>
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
                                        <Form.Label className="text-white mb-0 text-center w-100 pe-3">Current Price:</Form.Label>
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
                                    <Button variant="primary" type="submit" size="lg" style={{ borderRadius: '5px', padding: '10px 30px' }}>
                                        Add Product
                                    </Button>
                                </div>
                            </Form>
                        </div>

                        <Card className="shadow-sm">
                            <Card.Header>
                                <h4 className="mb-0">Product List</h4>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <Table striped bordered hover responsive>
                                    <thead className="table-light">
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Description</th>
                                            <th>Price</th>
                                            <th>Current Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map((product, index) => (
                                            <tr key={product.id}>
                                                <td>{index + 1}</td>
                                                <td>{product.name}</td>
                                                <td>
                                                    <div
                                                        style={{
                                                            maxWidth: '300px',
                                                            overflow: 'hidden',
                                                            textOverflow: 'ellipsis',
                                                        }}
                                                        title={product.description}
                                                    >
                                                        {product.description}
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-decoration-line-through text-muted">
                                                        {product.price} đ
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="text-danger fw-bold">
                                                        {product.currentPrice} đ
                                                    </span>
                                                </td>
                                                <td>
                                                    <div className="d-flex flex-column gap-1 align-items-center">
                                                        <Button
                                                            variant="danger"
                                                            size="sm"
                                                            onClick={() => handleDelete(product.id)}
                                                        >
                                                            Delete
                                                        </Button>
                                                        <Button
                                                            variant="danger"
                                                            size="sm"
                                                            onClick={() => handleEdit(product.id)}
                                                        >
                                                            Edit
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </>
                )}
            </Container>
        </div>
    );
};

export default ProductList; 