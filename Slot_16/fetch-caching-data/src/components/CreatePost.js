import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Alert, Card } from "react-bootstrap";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!title.trim()) errs.title = "Tiêu đề không được để trống!";
    if (!content.trim()) errs.content = "Nội dung không được để trống!";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const newPost = { title, content };
    try {
      await axios.post("http://localhost:3000/posts", newPost);
      setStatus("Bài viết đã được tạo thành công!");
      setTitle("");
      setContent("");
      setTimeout(() => navigate("/"), 1000);
    } catch (error) {
      setStatus("Có lỗi xảy ra khi tạo bài viết.");
      console.error("Lỗi khi tạo bài viết:", error);
    }
  };

  return (
    <Container className="my-4">
      <Card className="mx-auto" style={{ maxWidth: 600 }}>
        <Card.Body>
          <h2 className="mb-4">Thêm bài viết mới</h2>
          {status && <Alert variant={status.includes("thành công") ? "success" : "danger"}>{status}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Tiêu đề</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tiêu đề"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                isInvalid={!!errors.title}
              />
              <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nội dung</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Nội dung"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                isInvalid={!!errors.content}
              />
              <Form.Control.Feedback type="invalid">{errors.content}</Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
              Tạo bài viết
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

CreatePost.propTypes = {
  // Không nhận props, nếu có truyền props thì validate ở đây
};

export default CreatePost;
