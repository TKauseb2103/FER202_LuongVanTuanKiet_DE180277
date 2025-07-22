import { createSlice } from '@reduxjs/toolkit';

// Sample quiz data
const initialQuestions = [
  {
    id: 1,
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["javascript", "scripting", "script", "js"],
    correctAnswer: "script",
    userAnswer: null
  },
  {
    id: 2,
    question: "What are variables used for in JavaScript Programs?",
    options: [
      "Storing numbers, dates, or other values",
      "Varying randomly",
      "Causing high-school algebra flashbacks",
      "None of these"
    ],
    correctAnswer: "Storing numbers, dates, or other values",
    userAnswer: null
  },
  {
    id: 3,
    question: "Which of the following can't be done with client-side JavaScript?",
    options: [
      "Validating a form",
      "Sending a form's contents by email",
      "Storing the form's contents to a database file on the server",
      "Alerting the user with a message box"
    ],
    correctAnswer: "Storing the form's contents to a database file on the server",
    userAnswer: null
  },
  {
    id: 4,
    question: "How do you write 'Hello World' in an alert box?",
    options: [
      "alertBox('Hello World');",
      "msg('Hello World');",
      "alert('Hello World');",
      "msgBox('Hello World');"
    ],
    correctAnswer: "alert('Hello World');",
    userAnswer: null
  },
  {
    id: 5,
    question: "How do you create a function in JavaScript?",
    options: [
      "function = myFunction() {}",
      "function myFunction() {}",
      "create myFunction() {}",
      "function:myFunction() {}"
    ],
    correctAnswer: "function myFunction() {}",
    userAnswer: null
  },
  {
    id: 6,
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    options: ["<script src='xxx.js'>", "<script href='xxx.js'>", "<script name='xxx.js'>", "<script link='xxx.js'>"],
    correctAnswer: "<script src='xxx.js'>",
    userAnswer: null
  },
  {
    id: 7,
    question: "What is the correct way to write a JavaScript array?",
    options: ["var colors = ['red', 'green', 'blue']", "var colors = (1:'red', 2:'green', 3:'blue')", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", "var colors = 'red', 'green', 'blue'"],
    correctAnswer: "var colors = ['red', 'green', 'blue']",
    userAnswer: null
  },
  {
    id: 8,
    question: "What is the correct way to write a JavaScript object?",
    options: ["var person = {name: 'John', age: 30}", "var person = {name: 'John', age: 30}", "var person = {name: 'John', age: 30}", "var person = {name: 'John', age: 30}"],
    correctAnswer: "var person = {name: 'John', age: 30}",
    userAnswer: null
  },
  {
    id: 9,
    question: "What is the correct way to write a JavaScript function?",
    options: ["function myFunction() {return 'Hello World'}", "function myFunction() {return 'Hello World'}", "function myFunction() {return 'Hello World'}", "function myFunction() {return 'Hello World'}"],
    correctAnswer: "function myFunction() {return 'Hello World'}",
    userAnswer: null
  },
  {
    id: 10,
    question: "What is the correct way to write a JavaScript function?",
    options: ["function myFunction() {return 'Hello World'}", "function myFunction() {return 'Hello World'}", "function myFunction() {return 'Hello World'}", "function myFunction() {return 'Hello World'}"],
    correctAnswer: "function myFunction() {return 'Hello World'}",
    userAnswer: null
  }
];

const initialState = {
  questions: initialQuestions,
  currentQuestionIndex: 0,
  isCompleted: false,
  score: 0,
  showResults: false
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    selectAnswer: (state, action) => {
      const { questionId, selectedAnswer } = action.payload;
      const question = state.questions.find(q => q.id === questionId);
      if (question) {
        question.userAnswer = selectedAnswer;
      }
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },
    previousQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },
    goToQuestion: (state, action) => {
      const index = action.payload;
      if (index >= 0 && index < state.questions.length) {
        state.currentQuestionIndex = index;
      }
    },
    submitQuiz: (state) => {
      state.isCompleted = true;
      state.showResults = true;
      const correctAnswers = state.questions.filter(
        question => question.userAnswer === question.correctAnswer
      ).length;
      state.score = correctAnswers;
    },
    resetQuiz: (state) => {
      state.questions.forEach(question => {
        question.userAnswer = null;
      });
      state.currentQuestionIndex = 0;
      state.isCompleted = false;
      state.score = 0;
      state.showResults = false;
    }
  }
});

export const {
  selectAnswer,
  nextQuestion,
  previousQuestion,
  goToQuestion,
  submitQuiz,
  resetQuiz
} = quizSlice.actions;

export default quizSlice.reducer; 