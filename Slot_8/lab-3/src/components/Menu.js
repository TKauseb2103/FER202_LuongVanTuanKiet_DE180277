import pizzas from '../data/pizza_data.json';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

const Menu = ({ searchTerm = '' }) => {
    const filteredPizzas = pizzas.filter(pizza =>
        pizza.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <Container className="my-5">
            <h1 className="text-start mb-4 text-white">Our Menu</h1>
            <Row>
                {filteredPizzas.map((pizza, index) => (
                    <Col key={index} md={3} className="mb-4">
                        <Card>
                            <div className="position-relative">
                                {pizza.tag && (
                                    <Badge
                                        className="position-absolute top-0 start-0 px-4 bg-warning"
                                        style={{
                                            fontSize: '20px',
                                            color: 'black',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        {pizza.tag}
                                    </Badge>
                                )}
                                <Card.Img
                                    variant="top"
                                    src={pizza.image}
                                    alt={pizza.name}
                                    style={{
                                        width: '100%',
                                        height: '300px',
                                        objectFit: 'cover',
                                        aspectRatio: '1/1'
                                    }}
                                />
                            </div>
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        fontFamily: 'Ancizar Serif, serif',
                                        fontSize: '26px',
                                    }}
                                >
                                    {pizza.name}
                                </Card.Title>
                                <Card.Text>
                                    {pizza.oldPrice && (
                                        <span className="text-decoration-line-through text-muted">
                                            {pizza.oldPrice}
                                        </span>
                                    )}
                                    <span className={pizza.oldPrice ? "text-warning ms-1" : "text-dark"}>
                                        {pizza.price}
                                    </span>
                                </Card.Text>
                                <Button variant="dark" className="w-100">Buy</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Menu;