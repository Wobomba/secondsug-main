import React, { useState } from 'react';
import FormSignup from '../RegPassenger/FormPass';
import '../../../src/Form.css';
import { Link } from 'react-router-dom';

const RegPassenger = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <Link to='/' />
        )}
      </div>
    </>
  );
};

export default RegPassenger;