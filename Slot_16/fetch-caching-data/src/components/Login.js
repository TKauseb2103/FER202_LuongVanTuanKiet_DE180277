import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Alert, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!username.trim()) errs.username = "Username không được để trống!";
    if (!password.trim()) errs.password = "Password không được để trống!";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    try {
      const res = await axios.get("http://localhost:3000/useraccounts");
      const users = res.data;
      const found = users.find(
        (u) => u.username === username && u.password === password
      );
      if (found) {
        setStatus(`Login successfully with username: ${username}`);
        setTimeout(() => {
          if (onLogin) onLogin(username);
          navigate("/posts");
        }, 1000);
      } else {
        setStatus("Sai username hoặc password!");
      }
    } catch (error) {
      setStatus("Lỗi kết nối tới server!");
    }
    setLoading(false);
  };

  return (
    <Container className="my-5">
      <Card className="mx-auto" style={{ maxWidth: 400 }}>
        <Card.Body>
          <h3 className="mb-4">Đăng nhập</h3>
          {status && (
            <Alert variant={status.startsWith("Login") ? "success" : "danger"}>
              {status}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                isInvalid={!!errors.username}
                placeholder="Nhập username"
                disabled={loading}
              />
              <Form.Control.Feedback type="invalid">
                {errors.username}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isInvalid={!!errors.password}
                placeholder="Nhập password"
                disabled={loading}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              type="submit"
              variant="primary"
              className="w-100"
              disabled={loading}
            >
              {loading ? "Đang kiểm tra..." : "Đăng nhập"}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

Login.propTypes = {
  onLogin: PropTypes.func,
};

export default Login;
