import React, { useState } from 'react';

export function SummaryForm() {

  const [termsAccepted, setTermsAccepted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    console.log('handleSubmit');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <input
          type="checkbox"
          id="terms-and-conditions"
          checked={termsAccepted}
          onChange={e => setTermsAccepted(e.target.checked)}
        />
        <label htmlFor="terms-and-conditions">
          I agree to
          <span style={{ color: 'blue' }}> Terms and Conditions</span>
        </label>
        <button type="submit" disabled={!termsAccepted}>
          Confirm order
        </button>
      </div>
    </form>
  );
}
