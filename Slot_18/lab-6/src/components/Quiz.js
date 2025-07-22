import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAnswer,
  nextQuestion,
  previousQuestion,
  goToQuestion,
  submitQuiz
} from '../store/quizSlice';
import {
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';
import Result from './Result';

const Quiz = () => {
  const dispatch = useDispatch();
  const {
    questions,
    currentQuestionIndex,
    showResults
  } = useSelector((state) => state.quiz);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (selectedAnswer) => {
    dispatch(selectAnswer({
      questionId: currentQuestion.id,
      selectedAnswer
    }));
  };

  const handleNext = () => {
    dispatch(nextQuestion());
  };

  const handlePrevious = () => {
    dispatch(previousQuestion());
  };

  const handleFirst = () => {
    dispatch(goToQuestion(0));
  };

  const handleLast = () => {
    dispatch(goToQuestion(questions.length - 1));
  };

  const handleSubmit = () => {
    dispatch(submitQuiz());
  };

  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  if (showResults) {
    return <Result />;
  }

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <div style={{ backgroundColor: '#343a40', color: 'white', padding: '20px 0', textAlign: 'center' }}>
        <h1>JavaScript Quiz</h1>
      </div>

      <Container className="py-4">
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <div className="mb-4">
              <h4 className="mb-4">
                Q.{currentQuestionIndex + 1} {currentQuestion.question}
              </h4>
              
              <Row>
                {currentQuestion.options.map((option, index) => (
                  <Col md={6} key={index} className="mb-3">
                    <div
                      onClick={() => handleAnswerSelect(option)}
                      style={{
                        padding: '15px',
                        border: '1px solid #dee2e6',
                        borderRadius: '5px',
                        backgroundColor: currentQuestion.userAnswer === option ? '#007bff' : 'white',
                        color: currentQuestion.userAnswer === option ? 'white' : 'black',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                    >
                      <input
                        type="radio"
                        name={`question-${currentQuestion.id}`}
                        checked={currentQuestion.userAnswer === option}
                        onChange={() => {}}
                        style={{ marginRight: '8px' }}
                      />
                      {option}
                    </div>
                  </Col>
                ))}
              </Row>
            </div>

            <div className="d-flex justify-content-center gap-2 mb-4">
              <Button 
                variant="primary" 
                size="sm"
                onClick={handleFirst}
                disabled={isFirstQuestion}
              >
                First
              </Button>
              <Button 
                variant="primary" 
                size="sm"
                onClick={handlePrevious}
                disabled={isFirstQuestion}
              >
                Prev
              </Button>
              <Button 
                variant="primary" 
                size="sm"
                onClick={handleNext}
                disabled={isLastQuestion}
              >
                Next
              </Button>
              <Button 
                variant="primary" 
                size="sm"
                onClick={handleLast}
                disabled={isLastQuestion}
              >
                Last
              </Button>
            </div>

            <div className="d-flex justify-content-start gap-2">
              <Button variant="info" size="sm">
                Quiz
              </Button>
              <Button variant="info" size="sm">
                Quiz Review
              </Button>
              <Button variant="info" size="sm" onClick={handleSubmit}>
                Submit
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Quiz; 