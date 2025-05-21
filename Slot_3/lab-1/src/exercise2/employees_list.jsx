import { employees } from '../employee_data';

function displayEmployeesList() {
  return (
    <div className="employees-list">
      <h2>Employees List</h2>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            {employee.name} - {employee.age} years old - {employee.department}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default displayEmployeesList;
