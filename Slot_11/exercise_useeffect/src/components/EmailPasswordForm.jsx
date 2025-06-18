import React, { useState, useEffect } from "react";
import { Form, Button, Col } from "react-bootstrap";

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  return password.length >= 5;
};

function EmailPasswordForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  useEffect(() => {
    const isValidEmail = validateEmail(email);
    setIsEmailValid(isValidEmail);
    if (!isValidEmail) {
      setEmailErrorMessage("Email không hợp lệ!");
    } else {
      setEmailErrorMessage("");
    }
  }, [email]);

  useEffect(() => {
    const isValidPassword = validatePassword(password);
    setIsPasswordValid(isValidPassword);
    if (!isValidPassword) {
      setPasswordErrorMessage("Mật khẩu phải có ít nhất 5 ký tự!");
    } else {
      setPasswordErrorMessage("");
    }
  }, [password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmailValid && isPasswordValid) {
      console.log("Form submitted:", { email, password });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Col sm={12} md={6} lg={4} className="mx-auto">
        <Form.Group controlId="emailInput" style={{ width: "600px" }}>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isValid={isEmailValid && email.length > 0}
            isInvalid={!isEmailValid}
          />
          <Form.Control.Feedback type="invalid">
            {emailErrorMessage}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="passwordInput" style={{ width: "600px" }}>
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isValid={isPasswordValid && password.length > 0}
            isInvalid={!isPasswordValid}
          />
          <Form.Control.Feedback type="invalid">
            {passwordErrorMessage}
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          disabled={!isEmailValid || !isPasswordValid || !email || !password}
          className="mt-3"
        >
          Gửi
        </Button>
      </Col>
    </Form>
  );
}

export default EmailPasswordForm;
