import './App.css';
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import LaptopList from './components/LaptopList';
import LaptopDetail from './components/LaptopDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function Welcome({ user }) {
  return (
    <header className="App-header">
      <h2>Welcome, {user}!</h2>
    </header>
  );
}

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              !user ? <LoginForm setUser={setUser} /> : <Navigate to="/laptops" />
            }
          />
          <Route
            path="/welcome"
            element={user ? <Welcome user={user} /> : <Navigate to="/" />}
          />
          <Route
            path="/laptops"
            element={user ? <LaptopList /> : <Navigate to="/" />}
          />
          <Route
            path="/laptops/:id"
            element={user ? <LaptopDetail /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
