import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Exercise1 from './exercise1/employee_details';
import Exercise2 from './exercise2/employees_list';
import Exercise3 from './exercise3/employee_table';
import Exercise4 from './exercise4/average_age';
import Exercise5 from './exercise5/employee_name_menu';
import Exercise6 from './exercise6/it_department_employee';
import Exercise7 from './exercise7/sort_employee';
import Exercise8 from './exercise8/group_employees';
import Exercise9 from './exercise9/check_employee';
import Exercise10 from './exercise10/search_employee';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Exercise1 />
    <hr />
    <Exercise2 />
    <hr />
    <Exercise3 />
    <hr />
    <Exercise4 />
    <hr />
    <Exercise5 />
    <hr />
    <Exercise6 />
    <hr />
    <Exercise7 />
    <hr />
    <Exercise8 />
    <hr />
    <Exercise9 />
    <hr />
    <Exercise10 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
