import React from 'react';
import { Link } from 'react-router-dom';

const FormSubmit = () => {
  return (
    <section className='en-font' id='frm-submit'>

      <div className='wrapper'>
        <div className='container'>
          <p>Form Submitted</p>
          <p> Your response has been recorded </p>
          <div className='link'>
            <Link to='/'>
              <p> Back to homepage</p>
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
};

export default FormSubmit;
