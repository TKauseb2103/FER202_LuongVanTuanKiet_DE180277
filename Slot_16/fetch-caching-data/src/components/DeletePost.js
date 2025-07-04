import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

const DeletePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/posts/${id}`);
      setShow(false);
      navigate("/");
    } catch (error) {
      setStatus("Lỗi khi xóa bài viết.");
    }
  };

  const handleClose = () => {
    setShow(false);
    navigate("/");
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Xác nhận xóa bài viết</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Bạn chắc chắn muốn xóa bài viết này?</p>
        {status && <div className="text-danger">{status}</div>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Hủy
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Xóa
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeletePost;
