import React, { useState, useEffect } from "react";
import { Form, Button, Col } from "react-bootstrap";

const validateInput = (value) => {
    return value.length >= 5;
};

function ValidatedInput() {
    const [value, setValue] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const isValidInput = validateInput(value);
        setIsValid(isValidInput);
        if (!isValidInput) {
            setErrorMessage("Giá trị phải có ít nhất 5 ký tự!");
        } else {
            setErrorMessage("");
        }
    }, [value]);

    return (
        <Col sm={12} md={6} lg={4} className="mx-auto">
            <Form.Group controlId="validatedInput" style={{ width: "300px" }}>
                <Form.Label>Nhập một giá trị</Form.Label>
                <Form.Control
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    isValid={isValid}
                    isInvalid={!isValid}
                />
                <Form.Control.Feedback type="invalid">
                    {errorMessage}
                </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!isValid}>
                Gửi
            </Button>
        </Col>
    );
}

export default ValidatedInput;
