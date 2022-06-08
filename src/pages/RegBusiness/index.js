import React, { useState } from 'react';
import FormSignup from '../RegBusiness/FormBusiness';
import '../../../src/Form.css';
import { Link } from 'react-router-dom';

const RegBusiness = () => {
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

export default RegBusiness;