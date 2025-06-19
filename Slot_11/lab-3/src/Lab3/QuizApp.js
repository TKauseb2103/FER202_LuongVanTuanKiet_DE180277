import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Question from './Question';
import Score from './Score';
import 'bootstrap/dist/css/bootstrap.min.css';

class QuizApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [
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
            ],
            currentQuestion: 0,
            score: 0,
            quizEnd: false
        };
    }

    handleAnswer = (selectedOption) => {
        const { currentQuestion, questions, score } = this.state;
        if (selectedOption === questions[currentQuestion].answer) {
            this.setState({
                score: score + 1
            });
        }

        if (currentQuestion < questions.length - 1) {
            this.setState({
                currentQuestion: currentQuestion + 1
            });
        } else {
            this.setState({
                quizEnd: true
            });
        }
    }

    resetQuiz = () => {
        this.setState({
            currentQuestion: 0,
            score: 0,
            quizEnd: false
        });
    }

    render() {
        const { questions, currentQuestion, quizEnd, score } = this.state;

        return (
            <Container className="py-5">
                {quizEnd ? (
                    <Score 
                        score={score} 
                        totalQuestions={questions.length} 
                        onReset={this.resetQuiz} 
                    />
                ) : (
                    <Question 
                        id={questions[currentQuestion].id}
                        question={questions[currentQuestion].question}
                        options={questions[currentQuestion].options}
                        onAnswer={this.handleAnswer}
                    />
                )}
            </Container>
        );
    }
}

export default QuizApp;