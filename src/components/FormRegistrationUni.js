import React from 'react';

const FormRegistrationUni = ({nextFormPage}) => {
  return (
    <section className='kh-font' id='registrationUni'>

      <div className='wrapper'>
        <div className='title'>
          <h2>ពាក្យចុះឈ្មោះសុំចូលរៀន</h2>
        </div>

        <div className='choose-faculty-wrapper'>
          <h3>ជ្រើសរើសមហាវិទ្យាល័យ</h3>
          <form className='frm'>
            <div className='facult-box'>

              <label  required>
                <div className='single-item' >
                  <input
                    type="radio"
                    name="faculty"
                    value="option1"

                    className="form-check-input"
                  
                  />
                  មហាវិទ្យាល័យវិស្វកម្ម
                </div>

              </label>

            </div>
            <div className='facult-box'>
              <label>
                <div className='single-item'>
                  <input
                    type="radio"
                    name="faculty"
                    value="option2"
                    className="form-check-input"
                  />
                  មហាវិទ្យាល័យវិទ្យាសាស្រ្ដ
                </div>

              </label>
            </div>

            <div className='facult-box'>
              <label>
                <div className='single-item'>
                  <input
                    type="radio"
                    name="faculty"
                    value="option3"
                    className="form-check-input"
                    required
                  />
                  មហាវិទ្យាល័យអប់រំ
                </div>

              </label>

            </div>
            <div className='facult-box'>

              <label>
                <div className='single-item'>
                  <input
                    type="radio"
                    name="faculty"
                    value="option4"
                    className="form-check-input"
                    required
                  />
                  វិទ្យាស្ថានភាសាបរទេស
                </div>

              </label>


            </div>
            <div className='facult-box'>
              <label>
                <div className='single-item'>
                  <input
                    type="radio"
                    name="faculty"
                    value="option5"
                    className="form-check-input"
                    required
                  />
                  មហាវិទ្យាល័យសិក្សាអភិវឌ្ឍន៏
                </div>

              </label>

            </div>
            <div className='facult-box'>
              <label>
                <div className='single-item'>
                  <input
                    type="radio"
                    name="faculty"
                    value="option6"
                    className="form-check-input"
                    required
                  />
                  មហាវិទ្យាល័យសង្គម - មនុស្សសាស្រ្ដ
                </div>

              </label>

            </div>


          </form>
        </div>
        <div className='btn-registion'>

            <span className='btn btn-disable'>
              ត្រឡប់ក្រោយ
            </span>

            <span className='btn next-btn-right' onClick={nextFormPage}>
              បន្ទាប់
            </span>

        </div>


      </div>
    </section>
  );

};

export default FormRegistrationUni;
