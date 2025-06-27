import React from "react";
import MyForm from "./ex3/MyForm";
import UserForm from "./ex4/UserForm";

const App = () => {
  const handleFormSubmit = (formData) => {
    console.log("Dữ liệu đã gửi:", formData);
  };

  return (
    <div className="App">
      <h1>Ứng Dụng React</h1>
      <UserForm
        onSubmit={(data) => alert("Dữ liệu hợp lệ: " + JSON.stringify(data))}
      />{" "}
    </div>
  );
};

export default App;
