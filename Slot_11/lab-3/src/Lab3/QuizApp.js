import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Question from './Question';
import Score from './Score';
import 'bootstrap/dist/css/bootstrap.min.css';

const QUESTIONS = [
    {
        id: 1,
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        id: 2,
        question: "What is the largest planet in our solar system?",
        options: ["Jupiter", "Saturn", "Mars", "Earth"],
        answer: "Jupiter"
    },
];

function QuizApp() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [quizEnd, setQuizEnd] = useState(false);

    useEffect(() => {
        if (!quizEnd && currentQuestion === 0 && score === 0) {
        }
    }, [quizEnd, currentQuestion, score]);

    const handleAnswer = (selectedOption) => {
        if (selectedOption === QUESTIONS[currentQuestion].answer) {
            setScore(prev => prev + 1);
        }

        if (currentQuestion < QUESTIONS.length - 1) {
            setCurrentQuestion(prev => prev + 1);
        } else {
            setQuizEnd(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setQuizEnd(false);
    };

    return (
        <Container className="py-5">
            {quizEnd ? (
                <Score
                    score={score}
                    totalQuestions={QUESTIONS.length}
                    onReset={resetQuiz}
                />
            ) : (
                <Question
                    id={QUESTIONS[currentQuestion].id}
                    question={QUESTIONS[currentQuestion].question}
                    options={QUESTIONS[currentQuestion].options}
                    onAnswer={handleAnswer}
                />
            )}
        </Container>
    );
}

export default QuizApp;