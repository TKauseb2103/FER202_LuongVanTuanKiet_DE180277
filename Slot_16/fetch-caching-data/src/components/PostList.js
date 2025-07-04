import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Card, Button, Spinner, Alert } from "react-bootstrap";

const PostList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts");
        setData(response.data);
      } catch (error) {
        setData([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <Container className="my-5 text-center">
        <Spinner animation="border" />
        <div>Đang tải...</div>
      </Container>
    );
  }

  if (!data || data.length === 0) {
    return (
      <Container className="my-5">
        <Alert variant="info">Không có bài viết nào!</Alert>
        <Button as={Link} to="/create" variant="primary">
          Tạo bài viết mới
        </Button>
      </Container>
    );
  }

  return (
    <Container className="my-4">
      <Row className="mb-3">
        <Col>
          <h1>Danh sách bài viết</h1>
        </Col>
        <Col className="text-end">
          <Button as={Link} to="/create" variant="success">
            Tạo bài viết mới
          </Button>
        </Col>
      </Row>
      <Row>
        {data.map((post) => (
          <Col md={6} lg={4} key={post.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content}</Card.Text>
                <div className="d-flex justify-content-between">
                  <Button as={Link} to={`/edit/${post.id}`} variant="warning" size="sm">
                    Chỉnh sửa
                  </Button>
                  <Button as={Link} to={`/delete/${post.id}`} variant="danger" size="sm">
                    Xóa
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PostList;
