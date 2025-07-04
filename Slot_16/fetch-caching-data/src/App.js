import React, { useState, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = lazy(() => import("./components/Login"));
const PostList = lazy(() => import("./components/PostList"));

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate to="/posts" />
              ) : (
                <Login onLogin={() => setIsLoggedIn(true)} />
              )
            }
          />
          <Route
            path="/posts"
            element={isLoggedIn ? <PostList /> : <Navigate to="/" />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
