import React, { createContext, useContext, useState } from 'react';

export const QuizContext = createContext();

export const useQuiz = () => useContext(QuizContext);

export const QuizProvider = ({ children }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [quizEnd, setQuizEnd] = useState(false);
    const [selected, setSelected] = useState(null);

    return (
        <QuizContext.Provider value={{
            currentQuestion, setCurrentQuestion,
            score, setScore,
            quizEnd, setQuizEnd,
            selected, setSelected
        }}>
            {children}
        </QuizContext.Provider>
    );
};