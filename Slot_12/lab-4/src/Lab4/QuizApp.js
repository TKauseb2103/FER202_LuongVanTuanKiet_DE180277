import React, { useContext, useEffect } from 'react';
import { QuizContext } from '../hook/QuizProvider';
import { Container, Card, Button, Form } from 'react-bootstrap';

export const quizData = [
    {
        question: 'What is ReactJS?',
        answers: ['A JavaScript library for building user interfaces', 'A programming language', 'A database management system'],
        correctAnswer: 'A JavaScript library for building user interfaces'
    },
    {
        question: 'What is JSX?',
        answers: ['A programming language', 'A file format', 'A syntax extension for JavaScript'],
        correctAnswer: 'A syntax extension for JavaScript'
    }
];

const QuizApp = () => {
    const {
        currentQuestion, setCurrentQuestion,
        score, setScore,
        quizEnd, setQuizEnd,
        selected, setSelected
    } = useContext(QuizContext);

    useEffect(() => {
        if (quizEnd) {
            document.title = `Quiz Ended - Score: ${score}`;
        } else {
            document.title = `Quiz Question ${currentQuestion + 1}`;
        }
    }, [quizEnd, score, currentQuestion]);

    const handleNext = () => {
        if (selected === quizData[currentQuestion].correctAnswer) {
            setScore(prev => prev + 1);
        }
        if (currentQuestion < quizData.length - 1) {
            setCurrentQuestion(prev => prev + 1);
            setSelected(null);
        } else {
            setQuizEnd(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setQuizEnd(false);
        setSelected(null);
    };

    return (
        <Container className="py-5">
            {!quizEnd ? (
                <Card className="text-start mx-auto" style={{ maxWidth: 600 }}>
                    <Card.Header>
                        <h2 style={{ color: 'red' }}>Question {currentQuestion + 1}</h2>
                        <h3>{quizData[currentQuestion].question}</h3>
                    </Card.Header>
                    <Card.Body>
                        <Form>
                            {quizData[currentQuestion].answers.map((option, idx) => (
                                <Form.Check
                                    key={idx}
                                    type="radio"
                                    name="answer"
                                    id={`answer-${idx}`}
                                    label={option}
                                    value={option}
                                    checked={selected === option}
                                    onChange={() => setSelected(option)}
                                    className="mb-2"
                                    style={{
                                        background: selected === option ? '#f5f5f5' : 'transparent',
                                        borderRadius: '5px',
                                        padding: '8px'
                                    }}
                                />
                            ))}
                            <Button
                                variant="danger"
                                className="mt-3"
                                onClick={handleNext}
                                disabled={selected === null}
                            >
                                Next
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            ) : (
                <Card className="text-center mx-auto" style={{ maxWidth: 400 }}>
                    <Card.Header>
                        <h1>Quiz Ended</h1>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Your Score: {score}</Card.Title>
                        <Card.Text>
                            You got {score} out of {quizData.length} questions correct!
                        </Card.Text>
                        <Button variant="primary" onClick={resetQuiz}>
                            Play Again
                        </Button>
                    </Card.Body>
                </Card>
            )}
        </Container>
    );
};

export default QuizApp;