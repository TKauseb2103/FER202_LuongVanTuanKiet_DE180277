import React, { useState, useEffect, useCallback } from "react";
import { Form, Button } from "react-bootstrap";

const INITIAL_FORM_STATE = {
  name: "",
  gender: "",
  country: "",
  agreeToTerms: false
};

const VALIDATION_RULES = {
  name: (value) => ({
    isValid: value.trim().length >= 3,
    error: "Name must be at least 3 characters long."
  }),
  gender: (value) => ({
    isValid: value !== "",
    error: "Please select a gender."
  }),
  country: (value) => ({
    isValid: value !== "",
    error: "Please select a country."
  }),
  agreeToTerms: (value) => ({
    isValid: value === true,
    error: "Bạn phải đồng ý với điều khoản!"
  })
};

const COUNTRIES = [
  { value: "vietnam", label: "Vietnam" },
  { value: "usa", label: "USA" },
  { value: "uk", label: "Anh" },
  { value: "japan", label: "Japan" },
  { value: "korea", label: "South Korea" },
  { value: "china", label: "China" }
];

const GENDERS = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" }
];

function ComprehensiveForm() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState({});

  const validateField = useCallback((field, value) => {
    const validation = VALIDATION_RULES[field](value);
    setIsValid(prev => ({ ...prev, [field]: validation.isValid }));
    setErrors(prev => ({ ...prev, [field]: validation.isValid ? "" : validation.error }));
  }, []);

  useEffect(() => {
    Object.keys(touched).forEach(field => {
      if (touched[field]) {
        validateField(field, formData[field]);
      }
    });
  }, [formData, touched, validateField]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allTouched = Object.fromEntries(
      Object.keys(INITIAL_FORM_STATE).map(key => [key, true])
    );
    setTouched(allTouched);

    const allValid = Object.keys(INITIAL_FORM_STATE).every(key =>
      VALIDATION_RULES[key](formData[key]).isValid
    );

    if (allValid) {
      console.log("Form data:", formData);
    }
  };

  const isFormValid = Object.keys(INITIAL_FORM_STATE).every(key =>
    VALIDATION_RULES[key](formData[key]).isValid
  );

  return (
    <div className="container mt-4" style={{ maxWidth: "600px", paddingLeft: "60px", marginLeft: "auto" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            onBlur={() => setTouched(prev => ({ ...prev, name: true }))}
            isValid={touched.name && isValid.name}
            isInvalid={touched.name && !isValid.name}
            placeholder="Enter your name"
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="gender" className="mb-3">
          <Form.Label>Gender</Form.Label>
          <div>
            {GENDERS.map(({ value, label }) => (
              <Form.Check
                key={value}
                inline
                type="radio"
                name="gender"
                id={value}
                label={label}
                value={value}
                checked={formData.gender === value}
                onChange={(e) => handleInputChange("gender", e.target.value)}
              />
            ))}
          </div>
          {touched.gender && !isValid.gender && (
            <div className="text-danger small">{errors.gender}</div>
          )}
        </Form.Group>

        <Form.Group controlId="country" className="mb-3">
          <Form.Label>Country</Form.Label>
          <Form.Select
            value={formData.country}
            onChange={(e) => handleInputChange("country", e.target.value)}
            onBlur={() => setTouched(prev => ({ ...prev, country: true }))}
            isValid={touched.country && isValid.country}
            isInvalid={touched.country && !isValid.country}
          >
            <option value="">Select Country</option>
            {COUNTRIES.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {errors.country}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="agreeToTerms" className="mb-3">
          <Form.Check
            type="checkbox"
            label="I agree to the terms and conditions"
            checked={formData.agreeToTerms}
            onChange={(e) => handleInputChange("agreeToTerms", e.target.checked)}
            onBlur={() => setTouched(prev => ({ ...prev, agreeToTerms: true }))}
            isValid={touched.agreeToTerms && isValid.agreeToTerms}
            isInvalid={touched.agreeToTerms && !isValid.agreeToTerms}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          disabled={!isFormValid}
          className="mt-3"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ComprehensiveForm;