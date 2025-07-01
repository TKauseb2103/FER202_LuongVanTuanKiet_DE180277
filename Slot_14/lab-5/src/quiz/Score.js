import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Score = ({ score, totalQuestions, onReset }) => {
    return (
        <Card className="text-center">
            <Card.Header>
                <h1>Quiz Ended</h1>
            </Card.Header>
            <Card.Body>
                <Card.Title>Your Score: {score}</Card.Title>
                <Button variant="primary" onClick={onReset}>
                    Play Again
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Score;