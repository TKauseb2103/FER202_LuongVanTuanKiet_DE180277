import { employees } from "../employee_data";

const showEmployeeNameMenu = () => {
  return (
    <div>
      <label htmlFor="employee-select">Select Employee: </label>
      <select id="employee-select">
        {employees.map((employee, idx) => (
          <option key={employee.id || idx} value={employee.name}>
            {employee.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default showEmployeeNameMenu;
