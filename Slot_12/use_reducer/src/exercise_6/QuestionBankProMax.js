import React, { useReducer } from "react";
import { Button, Container, Card } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle, FaFlagCheckered } from "react-icons/fa";

const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],
      answer: "Pacific Ocean",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  answered: false,
  isCorrect: null,
  score: 0,
  showScore: false,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      const isCorrect =
        action.payload === state.questions[state.currentQuestion].answer;
      return {
        ...state,
        selectedOption: action.payload,
        answered: true,
        isCorrect,
      };
    case "NEXT_QUESTION":
      return {
        ...state,
        score: state.isCorrect ? state.score + 1 : state.score,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: "",
        answered: false,
        isCorrect: null,
        showScore:
          state.currentQuestion + 1 === state.questions.length ? true : false,
      };
    case "FINISH_QUIZ":
      return {
        ...state,
        score: state.isCorrect ? state.score + 1 : state.score,
        showScore: true,
      };
    case "RESTART_QUIZ":
      return {
        ...initialState,
      };
    default:
      return state;
  }
}

function QuestionBankProMax() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const {
    questions,
    currentQuestion,
    selectedOption,
    answered,
    isCorrect,
    score,
    showScore,
  } = state;

  const handleOptionSelect = (option) => {
    if (!answered) {
      dispatch({ type: "SELECT_OPTION", payload: option });
    }
  };

  const handleNextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  const handleFinishQuiz = () => {
    dispatch({ type: "FINISH_QUIZ" });
  };

  const handleRestartQuiz = () => {
    dispatch({ type: "RESTART_QUIZ" });
  };

  return (
    <Container className="mt-4">
      <Card className="p-4" style={{ margin: "0 auto" }}>
        {showScore ? (
          <div className="text-center">
            <h2>
              Your Score: {score} / {questions.length}
            </h2>
            <Button variant="primary" onClick={handleRestartQuiz}>
              Restart Quiz
            </Button>
          </div>
        ) : (
          <div className="text-center">
            <h3 style={{ fontWeight: 700 }}>
              Question {questions[currentQuestion].id}:
            </h3>
            <h4 style={{ fontWeight: 500 }}>
              {questions[currentQuestion].question}
            </h4>
            <div className="mt-4 mb-3 d-flex justify-content-center flex-wrap gap-2">
              {questions[currentQuestion].options.map((option, index) => {
                let variant = "outline-secondary";
                let style = {
                  minWidth: 160,
                  fontWeight: 500,
                  fontSize: 18,
                  borderRadius: 12,
                  borderWidth: 2,
                  opacity: answered && selectedOption !== option ? 0.7 : 1,
                  background: "#fff",
                  color: "#222",
                };

                if (answered) {
                  if (selectedOption === option) {
                    if (isCorrect) {
                      variant = "success";
                      style.background = "#2e7d32";
                      style.color = "#fff";
                      style.borderColor = "#2e7d32";
                    } else {
                      variant = "success";
                      style.background = "#276749";
                      style.color = "#fff";
                      style.borderColor = "#276749";
                    }
                  }
                }

                return (
                  <Button
                    key={index}
                    variant={variant}
                    style={style}
                    disabled={answered}
                    onClick={() => handleOptionSelect(option)}
                  >
                    {option}
                  </Button>
                );
              })}
            </div>
            {answered && (
              <div className="mb-3">
                {isCorrect ? (
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      color: "#2e7d32",
                      fontSize: 22,
                      fontWeight: 600,
                    }}
                  >
                    <FaCheckCircle className="me-2" size={28} />
                    Correct!
                  </div>
                ) : (
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      color: "#d32f2f",
                      fontSize: 22,
                      fontWeight: 600,
                    }}
                  >
                    <FaTimesCircle className="me-2" size={28} />
                    Incorrect! The correct answer is:{" "}
                    <span style={{ fontWeight: 700, marginLeft: 6 }}>
                      {questions[currentQuestion].answer}
                    </span>
                  </div>
                )}
              </div>
            )}
            {answered && (
              <Button
                variant="primary"
                className="mt-2"
                style={{
                  minWidth: 200,
                  fontSize: 20,
                  fontWeight: 600,
                  borderRadius: 10,
                  padding: "8px 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                }}
                onClick={
                  currentQuestion === questions.length - 1
                    ? handleFinishQuiz
                    : handleNextQuestion
                }
              >
                <FaFlagCheckered className="me-2" />
                {currentQuestion === questions.length - 1
                  ? "Finish Quiz"
                  : "Next Question"}
              </Button>
            )}
          </div>
        )}
      </Card>
    </Container>
  );
}

export default QuestionBankProMax;
