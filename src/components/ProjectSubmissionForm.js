import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const Form = styled.form`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SuccessMessage = styled.p`
  color: green;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const ProjectSubmissionForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    link: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Implement actual form submission logic here
      console.log('Form submitted:', formData);
      setSuccessMessage('Project submitted successfully!');
    } catch (error) {
      console.error('Form submission error:', error);
      setErrorMessage('An error occurred while submitting the project. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="title">Title:</Label>
          <Input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description">Description:</Label>
          <TextArea id="description" name="description" value={formData.description} onChange={handleChange} rows="4" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="image">Image URL:</Label>
          <Input type="url" id="image" name="image" value={formData.image} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="link">Project Link:</Label>
          <Input type="url" id="link" name="link" value={formData.link} onChange={handleChange} required />
        </FormGroup>
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Button type="submit" disabled={submitting}>{submitting ? 'Submitting...' : 'Submit'}</Button>
      </Form>
    </FormContainer>
  );
}

export default ProjectSubmissionForm;
