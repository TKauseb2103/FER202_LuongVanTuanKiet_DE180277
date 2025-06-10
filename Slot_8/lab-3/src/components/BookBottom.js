import { Container, Row, Col, Form, Button } from 'react-bootstrap';
const BookBottom = () => {
    return (
        <Container className="mb-5">
            <h2 className="text-center mb-4 text-white">Book Your Table</h2>
            <Row>
                <Col>
                    <Form>
                        <Row className="mb-3">
                            <Col md={4}>
                                <Form.Control
                                    type="text"
                                    placeholder="Your Name*"
                                    required
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    type="email"
                                    placeholder="Your Email*"
                                    required
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Select>
                                    <option>Select a Service</option>
                                    <option>Dinner</option>
                                    <option>Lunch</option>
                                    <option>Breakfast</option>
                                </Form.Select>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Control
                                as="textarea"
                                rows={6}
                                placeholder="Please state your comment"
                            />
                        </Form.Group>
                        <div className="text-start">
                            <Button
                                type="submit"
                                variant="warning"
                                className="text-white px-4 fw-bold"
                            >
                                Send Message
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default BookBottom;