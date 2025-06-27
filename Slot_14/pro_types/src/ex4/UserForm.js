import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Button, Alert } from "react-bootstrap";

const validateForm = (values) => {
  const errors = {};

  if (
    !values.name ||
    values.name.trim().length < 3 ||
    values.name.trim().length > 50
  ) {
    errors.name = "Tên phải có từ 3 đến 50 ký tự!";
  }

  if (!values.age || isNaN(values.age) || values.age < 18 || values.age > 100) {
    errors.age = "Tuổi phải nằm trong khoảng từ 18 đến 100!";
  }

  if (!values.email) {
    errors.email = "Email không được để trống!";
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(values.email)) {
    errors.email = "Email không đúng định dạng!";
  }

  if (values.phone && !/^\d{10,15}$/.test(values.phone)) {
    errors.phone = "Số điện thoại phải từ 10 đến 15 chữ số!";
  }

  if (!values.agree) {
    errors.agree = "Bạn phải đồng ý với điều khoản!";
  }

  return errors;
};

function UserForm({ onSubmit }) {
  const [values, setValues] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    gender: "",
    agree: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validateForm(values);
    setErrors(errs);
    setSubmitted(true);
    if (Object.keys(errs).length === 0) {
      onSubmit(values);
    }
  };

  return (
    <Form onSubmit={handleSubmit} style={{ maxWidth: 900, margin: "0 auto" }}>
      {submitted && Object.keys(errors).length > 0 && (
        <Alert variant="danger">
          <b>Lỗi:</b> Vui lòng kiểm tra các trường hợp lỗi.
        </Alert>
      )}
      <Form.Group className="mb-3">
        <Form.Label>Tên</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          isInvalid={!!errors.name}
        />
        <Form.Control.Feedback type="invalid">
          {errors.name}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Tuổi</Form.Label>
        <Form.Control
          type="number"
          name="age"
          value={values.age}
          onChange={handleChange}
          isInvalid={!!errors.age}
        />
        <Form.Control.Feedback type="invalid">
          {errors.age}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Số điện thoại</Form.Label>
        <Form.Control
          type="text"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          isInvalid={!!errors.phone}
        />
        <Form.Control.Feedback type="invalid">
          {errors.phone}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Giới tính</Form.Label>
        <Form.Select
          name="gender"
          value={values.gender}
          onChange={handleChange}
        >
          <option value="">Chọn giới tính</option>
          <option value="Nam">Nam</option>
          <option value="Nữ">Nữ</option>
          <option value="Khác">Khác</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check
          type="checkbox"
          name="agree"
          label="Đồng ý với điều khoản"
          checked={values.agree}
          onChange={handleChange}
          isInvalid={!!errors.agree}
          feedback={errors.agree}
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit" variant="primary">
        Gửi
      </Button>
    </Form>
  );
}

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default UserForm;
