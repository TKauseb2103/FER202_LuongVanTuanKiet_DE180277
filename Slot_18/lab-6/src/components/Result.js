import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetQuiz } from '../store/quizSlice';
import {
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';

const Result = () => {
  const dispatch = useDispatch();
  const { questions } = useSelector((state) => state.quiz);

  const handleReset = () => {
    dispatch(resetQuiz());
  };

  const getQuestionBackgroundColor = (question) => {
    if (!question.userAnswer) return '#f8d7da';
    return question.userAnswer === question.correctAnswer ? '#8EDD94FF' : '#f8d7da'; 
  };
  

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <div style={{ backgroundColor: '#343a40', color: 'white', padding: '20px 0', textAlign: 'center' }}>
        <h1>Quiz Review</h1>
      </div>

      <Container className="py-4">
        <Row className="justify-content-center">
          <Col md={10} lg={12}>
            {questions.map((question, questionIndex) => (
              <div 
                key={question.id} 
                className="mb-4 p-3"
                style={{ 
                  backgroundColor: getQuestionBackgroundColor(question),
                  borderRadius: '5px'
                }}
              >
                <h5 className="mb-3">
                  <strong>Q{questionIndex + 1}. {question.question}</strong>
                </h5>
                
                <Row>
                  {question.options.map((option, optionIndex) => (
                    <Col md={6} key={optionIndex} className="mb-2">
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input
                          type="radio"
                          name={`review-question-${question.id}`}
                          checked={question.userAnswer === option}
                          onChange={() => {}}
                          style={{ marginRight: '8px' }}
                          disabled
                        />
                        <span style={{ 
                          color: question.userAnswer === option ? '#000' : '#666',
                          fontWeight: question.userAnswer === option ? 'bold' : 'normal'
                        }}>
                          {option}
                        </span>
                      </div>
                    </Col>
                  ))}
                </Row>
                
                <div className="mt-3" style={{ 
                  backgroundColor: '#C2C2C2FF', 
                  padding: '8px 12px', 
                  borderRadius: '3px',
                  border: '1px solid grey'
                }}>
                  <strong>Right answer is: {question.correctAnswer}</strong>
                </div>
              </div>
            ))}
            
            <div className="mt-4 p-3" >
              <Row className="g-0">
                {questions.map((question, index) => (
                  <Col xs={12} sm={6} md={4} lg={1} key={question.id} className="p-2">
                    <div style={{
                      backgroundColor: '#8EDD94FF',
                      border: '1px solid green',
                      borderRadius: '3px',
                      padding: '16px',
                      fontSize: '14px',
                    }}>
                      <div style={{ fontWeight: 'normal', textDecoration: 'underline' }}>
                        Question No {index + 1}
                      </div>
                      <div style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
                        Answered
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
            
            <div className="d-flex justify-content-start gap-2 mt-4">
              <Button variant="info" size="sm">
                Quiz
              </Button>
              <Button variant="info" size="sm">
                Quiz Review
              </Button>
              <Button variant="info" size="sm" onClick={handleReset}>
                Reset Quiz 
              </Button>
              <Button variant="info" size="sm">
                Submit Quiz
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Result;