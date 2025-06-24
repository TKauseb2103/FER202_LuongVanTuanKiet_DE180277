import React from 'react';
import { Table, Col, Container } from 'react-bootstrap';

const Question = ({ id, question, options, onAnswer }) => {
    return (
        <Col className="text-start">
            <h2>Question {id}</h2>
            <h3>{question}</h3>
            <Container className="p-0 border">
                <Table hover className="mb-0">
                    <tbody>
                        {options.map((option, index) => (
                            <tr
                                key={index}
                                onClick={() => onAnswer(option)}
                                style={{ cursor: 'pointer' }}
                            >
                                <td className="p-3 text-decoration-underline text-primary">{option}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </Col>
    );
};

export default Question;