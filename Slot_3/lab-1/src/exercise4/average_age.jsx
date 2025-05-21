import { employees } from "../employee_data";

const calculateAverageAge = () => {
  const totalAge = employees.reduce((sum, employee) => sum + employee.age, 0);
  const averageAge = totalAge / employees.length;
  return <div>Average Age: {averageAge}</div>;
}

export default calculateAverageAge;
