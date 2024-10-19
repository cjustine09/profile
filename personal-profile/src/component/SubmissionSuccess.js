import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const SubmissionSuccess = () => {
  const { state } = useLocation();
  
  return (
    <Container className="mt-5">
      <h2>Thank you, {state.name}!</h2>
      <p>Your message has been sent.</p>
      <ul>
        <li><strong>Email:</strong> {state.email}</li>
        <li><strong>Message:</strong> {state.message}</li>
      </ul>
    </Container>
  );
};

export default SubmissionSuccess;
