import { employees } from "../employee_data";

const CheckEmployeeTeenager = () => {
  const isTeenager = employees.some(e => e.age >= 10 && e.age <= 20);
  return <p>Any employee is a teenager (10-20)? {isTeenager ? "true" : "false"}</p>;
};

export default CheckEmployeeTeenager;
