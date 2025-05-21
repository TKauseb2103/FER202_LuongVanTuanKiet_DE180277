import { employees } from "../employee_data";

function EmployeeTable() {
  return (
    <div className="employee-table">
      <h2>Employee Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, idx) => (
            <tr key={employee.id || idx}>
              <td>{employee.id || idx + 1}</td>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default EmployeeTable;
