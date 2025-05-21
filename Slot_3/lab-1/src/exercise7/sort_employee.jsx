import { employees } from "../employee_data";
import React, { useState } from "react";

const SortedEmployeeList = () => {
  const sortedEmployees = [...employees].sort((a, b) => {
    const deptCompare = a.department.localeCompare(b.department);
    if (deptCompare !== 0) return deptCompare;
    return a.name.localeCompare(b.name);
  });

  return (
    <div>
      <h3>Sorted Employees (by Department, then Name)</h3>
      <ul>
        {sortedEmployees.map((emp, idx) => (
          <li key={emp.id || idx}>
            {emp.name} - {emp.department}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortedEmployeeList;
