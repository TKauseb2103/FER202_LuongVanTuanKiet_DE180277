import { employees } from "../employee_data";

const GroupEmployees = () => {
  const departmentGroups = employees.reduce((groups, emp) => {
    if (!groups[emp.department]) groups[emp.department] = [];
    groups[emp.department].push(emp);
    return groups;
  }, {});

  return (
    <div>
      <h2>Employees Grouped by Department</h2>
      {Object.entries(departmentGroups).map(([dept, emps]) => (
        <div key={dept} style={{ marginBottom: "20px" }}>
          <h3>{dept}</h3>
          <ul>
            {emps.map((emp, idx) => (
              <li key={emp.id || idx}>{emp.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GroupEmployees;
