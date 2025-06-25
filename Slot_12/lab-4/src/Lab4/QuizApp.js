import React, { useEffect, useState } from 'react';
import { useQuiz } from '../hook/QuizProvider';
import { Container, Card, Button, Form, Row, Col } from 'react-bootstrap';

const initialQuizData = [
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
    } = useQuiz();

    // State cho quizData động
    const [quizData, setQuizData] = useState(initialQuizData);

    // State cho form tạo câu hỏi mới
    const [showCreate, setShowCreate] = useState(false);
    const [newQuestion, setNewQuestion] = useState('');
    const [newAnswers, setNewAnswers] = useState(['', '', '']);
    const [newCorrect, setNewCorrect] = useState('');

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

    // Thêm câu hỏi mới
    const handleAddQuestion = (e) => {
        e.preventDefault();
        if (
            newQuestion.trim() &&
            newAnswers.every(ans => ans.trim()) &&
            newAnswers.includes(newCorrect)
        ) {
            setQuizData(prev => [
                ...prev,
                {
                    question: newQuestion,
                    answers: newAnswers,
                    correctAnswer: newCorrect
                }
            ]);
            setNewQuestion('');
            setNewAnswers(['', '', '']);
            setNewCorrect('');
            setShowCreate(false);
            resetQuiz();
        }
    };

    const handleAnswerChange = (idx, value) => {
        setNewAnswers(prev => prev.map((ans, i) => (i === idx ? value : ans)));
    };

    return (
        <Container className="py-5">
            <div className="d-flex justify-content-end mb-3">
                <Button
                    variant={showCreate ? "secondary" : "success"}
                    onClick={() => setShowCreate(v => !v)}
                >
                    {showCreate ? "Close" : "Create Question"}
                </Button>
            </div>
            {showCreate && (
                <Card className="mb-4 mx-auto" style={{ maxWidth: 600 }}>
                    <Card.Header>
                        <h4>Create New Question</h4>
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit={handleAddQuestion}>
                            <Form.Group className="mb-3">
                                <Form.Label>Question</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={newQuestion}
                                    onChange={e => setNewQuestion(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Row>
                                {newAnswers.map((ans, idx) => (
                                    <Col md={4} key={idx}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Answer {idx + 1}</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={ans}
                                                onChange={e => handleAnswerChange(idx, e.target.value)}
                                                required
                                            />
                                            <Form.Check
                                                type="radio"
                                                name="correct"
                                                label="Correct"
                                                checked={newCorrect === ans && ans !== ''}
                                                onChange={() => setNewCorrect(ans)}
                                                disabled={!ans}
                                            />
                                        </Form.Group>
                                    </Col>
                                ))}
                            </Row>
                            <Button type="submit" variant="primary" disabled={
                                !newQuestion.trim() ||
                                newAnswers.some(ans => !ans.trim()) ||
                                !newAnswers.includes(newCorrect)
                            }>
                                Add Question
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            )}
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