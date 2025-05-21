function displayEmployeeDetails() {
  const employee = { name: "John Doe", age: 30, department: "IT" };
  const { name, age, department } = employee;
  return (
    <div className="App">
      <header className="App-header">
        <h1>{name}</h1>
        <p>Age: {age}</p>
        <p>Department: {department}</p>
      </header>
    </div>
  );
}

export default displayEmployeeDetails;
