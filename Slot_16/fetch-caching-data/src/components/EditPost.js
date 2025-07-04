import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button, Container, Alert, Card } from "react-bootstrap";

function EditPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/posts/${id}`);
        if (response.data) {
          setTitle(response.data.title);
          setContent(response.data.content);
        } else {
          setStatus(`Không tìm thấy bài viết với id ${id}`);
        }
      } catch (error) {
        setStatus("Lỗi khi lấy bài viết.");
      }
    };
    fetchPost();
  }, [id]);

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

    const updatedPost = { title, content };
    try {
      const response = await axios.put(
        `http://localhost:3000/posts/${id}`,
        updatedPost
      );
      if (response.status === 200) {
        setStatus("Bài viết đã được cập nhật!");
        setTimeout(() => navigate("/"), 1000);
      }
    } catch (error) {
      setStatus("Có lỗi xảy ra khi cập nhật bài viết.");
    }
  };

  return (
    <Container className="my-4">
      <Card className="mx-auto" style={{ maxWidth: 600 }}>
        <Card.Body>
          <h2 className="mb-4">Chỉnh sửa bài viết</h2>
          {status && (
            <Alert
              variant={status.includes("cập nhật") ? "success" : "danger"}
            >
              {status}
            </Alert>
          )}
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
              <Form.Control.Feedback type="invalid">
                {errors.title}
              </Form.Control.Feedback>
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
              <Form.Control.Feedback type="invalid">
                {errors.content}
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
              Cập nhật bài viết
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

EditPost.propTypes = {
};

export default EditPost;
