import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import ValidatedInput from './components/ValidatedInput';
import EmailPasswordForm from './components/EmailPasswordForm';
import ComprehensiveForm from './components/ComprehensiveForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ValidatedInput />
    <hr />
    <EmailPasswordForm />
    <hr />
    <ComprehensiveForm />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
