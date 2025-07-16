import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Modal, Alert } from 'react-bootstrap';

function LoginForm({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch(
        `http://localhost:3000/UserAccounts?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
      );
      const users = await res.json();
      if (users.length > 0 && users[0].status === "active") {
        setUser(username);
        setShowModal(true);
      } else {
        setError('Invalid username or password!');
      }
    } catch (err) {
      setError('Error connecting to server!');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Form onSubmit={handleSubmit} className="p-4 border rounded bg-white" style={{ minWidth: 350 }}>
        <h2 className="text-center mb-4">Login</h2>
        <Form.Group className="text-start mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="text-start mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100 mb-2">
          Login
        </Button>
        {error && <Alert variant="danger" className="text-start mt-2">{error}</Alert>}
      </Form>
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Welcome, <b>{username}</b> login Successful!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

LoginForm.propTypes = {
  setUser: PropTypes.func.isRequired
};

export default LoginForm; 