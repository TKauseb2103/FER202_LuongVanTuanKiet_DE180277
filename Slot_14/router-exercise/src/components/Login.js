import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert, Container } from 'react-bootstrap';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/user_account.json')
            .then(res => res.json())
            .then(data => {
                const found = data.find(
                    user => user.username === username && user.password === password
                );
                if (found) {
                    setError('');
                    navigate('/posts');
                } else {
                    setError('Sai tài khoản hoặc mật khẩu!');
                }
            })
            .catch(() => setError('Không thể kiểm tra tài khoản!'));
    };

    return (
        <Container style={{ maxWidth: 400, margin: '40px auto' }}>
            <h2>Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Tài khoản</Form.Label>
                    <Form.Control
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Mật khẩu</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>
                {error && <Alert variant="danger">{error}</Alert>}
                <Button variant="primary" type="submit">
                    Đăng nhập
                </Button>
            </Form>
        </Container>
    );
}

export default Login;