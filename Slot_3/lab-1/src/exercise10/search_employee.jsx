import { employees } from "../employee_data";
import React, { useState } from "react";

const SearchEmployee = () => {
  const [query, setQuery] = useState("");
  const filtered = employees.filter(emp =>
    emp.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <label htmlFor="search-employee">Search Employee by Name: </label>
      <input
        id="search-employee"
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Enter name..."
      />
      <ul style={{ marginTop: "10px" }}>
        {filtered.map((emp, idx) => (
          <li key={emp.id || idx}>{emp.name} - {emp.department}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchEmployee;
