import { employees } from "../employee_data";
import React, { useState } from "react";

const FilterDepartmentEmployee = () => {
  const departments = Array.from(new Set(employees.map(emp => emp.department)));
  const [selectedDept, setSelectedDept] = useState(departments[0] || "");

  const filteredEmployees = employees.filter(emp => emp.department === selectedDept);

  return (
    <div>
      <h3>Department Employees</h3>
      <label htmlFor="department-select">Select Department: </label>
      <select
        id="department-select"
        value={selectedDept}
        onChange={e => setSelectedDept(e.target.value)}
      >
        {departments.map((dept, idx) => (
          <option key={dept || idx} value={dept}>{dept}</option>
        ))}
      </select>
      <ul style={{ marginTop: "10px" }}>
        {filteredEmployees.map((emp, idx) => (
          <li key={emp.id || idx}>{emp.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterDepartmentEmployee;
