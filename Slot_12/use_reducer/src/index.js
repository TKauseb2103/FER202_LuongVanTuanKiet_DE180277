import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import QuestionBank from "./exercise_5/QuestionBank";
import ItemList from "./exercise_4/ItemList";
import "bootstrap/dist/css/bootstrap.min.css";
import QuestionBankProMax from "./exercise_6/QuestionBankProMax";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <QuestionBank /> */}
    {/* <ItemList /> */}
    <QuestionBankProMax />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
