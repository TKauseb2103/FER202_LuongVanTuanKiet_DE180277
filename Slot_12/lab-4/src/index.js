import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import QuizApp from './Lab4/QuizApp';
import { QuizProvider } from './hook/QuizProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QuizProvider>
    <React.StrictMode>
      <QuizApp />
    </React.StrictMode>
  </QuizProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
