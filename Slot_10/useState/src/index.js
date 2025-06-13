import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import Counter from "./ex1/count_button";
import UpdateProfile from "./ex2/update_profile";
import ProductList from "./ex3/product_list";
import ProductListRadio from "./ex4/product_list_radio";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Counter /> */}
    {/* <UpdateProfile /> */}
    {/* <ProductList /> */}
    <ProductListRadio />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
