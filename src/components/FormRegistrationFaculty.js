import React from 'react';

const FormRegistrationFaculty = ({nextFormPage, preFormPage}) => {
  return (
    <section className='kh-font' id='registrationFaculty'>
      <div className='wrapper'>
        <div className='title'>
          <h2>ពាក្យចុះឈ្មោះសុំចូលរៀន</h2>
        </div>

        <div className='choose-faculty-wrapper'>
          <h3>ជ្រើសរើសដេប៉ាតឺម់ង់</h3>
          <form className='frm'>
            <div className='facult-box'>

              <label  >
                <div className='single-item'>
                  <input
                    type="radio"
                    name="faculty"
                    value="option1"

                    className="form-check-input"
                  />

                  <div className='f-name'>
                    វិស្វកម្មបច្ចេកវិទ្យាពត៌មាន
                  </div>
                  <div className='cost'>
                    $ ៦០០ / ឆ្នាំ
                  </div>
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

                  <div className='f-name'>
                    វិស្វកម្មបជីវសាស្រ្ដ
                  </div>
                  <div className='cost'>
                    $ ៦០០ / ឆ្នាំ
                  </div>
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
                  />

                  <div className='f-name'>
                    វិស្វកម្មអេឡិចត្រូនិច និងទូរគមនាគមន៍
                  </div>
                  <div className='cost'>
                    $ ៦០០ / ឆ្នាំ
                  </div>
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
                  />
                  <div className='f-name'>
                    វិស្វកម្ម​ និងវិទ្យាសាស្រ្តទិន្នន័យ
                  </div>
                  <div className='cost'>
                    $ ២៥០០ / ឆ្នាំ
                  </div>
                </div>

              </label>


            </div>



          </form>
        </div>
        <div className='btn-registion'>

          
            <span className='btn' onClick={preFormPage}>
              ត្រឡប់ក្រោយ
            </span>
          

          
            <span className='btn' onClick={nextFormPage}>
              បន្ទាប់
            </span>
          

        </div>


      </div>
    </section>
  );
};

export default FormRegistrationFaculty;
