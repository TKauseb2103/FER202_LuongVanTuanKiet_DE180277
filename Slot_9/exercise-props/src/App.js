import UserProfile from "./components/UserProfile";
import Welcome from "./components/Welcome";

function App() {
  const userData = { name: "traltb@fe.edu.vn", age: 39 };
  return (
    <>
      <Welcome name="traltb@fe.edu.vn" />
      
      <UserProfile user={userData} />
    </>
  );
}

export default App;
