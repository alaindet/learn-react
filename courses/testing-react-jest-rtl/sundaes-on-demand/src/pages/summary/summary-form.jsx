import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function SummaryForm() {

  const [termsAccepted, setTermsAccepted] = useState(false);

  const checkboxLabel = (
    <span>
      I agree to
      <span style={{ color: 'blue' }}> Terms and Conditions</span>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={termsAccepted}
          onChange={e => setTermsAccepted(e.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!termsAccepted}>
        Confirm order
      </Button>
    </Form>
  );
}
