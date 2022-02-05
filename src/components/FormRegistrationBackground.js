import React from 'react';

const FormRegistrationBackground = ({nextFormPage, preFormPage}) => {
    return (
        <section className='kh-font' id='registrationBackground'>
            <div className='wrapper'>
                <div className='title'>
                    <h2>ជីវប្រវត្តិសង្ខេប</h2>
                </div>

                

                <div className='choose-faculty-wrapper'>
                    <h3>នាម</h3>
                    <form className='frm'>
                        <div className='facult-box2'>
                            <input type="text" placeholder='នាមរបស់អ្នក'/>
                        </div>
                    </form>
                </div>

                <div className='choose-faculty-wrapper'>
                    <h3>គោត្តនាម</h3>
                    <form className='frm'>
                        <div className='facult-box2'>
                            <input type="text" placeholder='គោត្តនាមរបស់អ្នក'/>
                        </div>
                    </form>
                </div>

                <div className='choose-faculty-wrapper'>
                    <h3>ភេទ</h3>
                    <form className='frm'>
                        <div className='facult-box'>
                            <label>
                                <div className='single-item'>
                                    <input
                                        type="radio"
                                        name="faculty"
                                        value="option2"
                                        className="form-check-input"
                                    />
                                    ប្រុស
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
                                    ស្រី
                                </div>

                            </label>
                        </div>
                    </form>
                </div>

                <div className='choose-faculty-wrapper'>
                    <h3>ថ្ងៃខែឆ្នាំកំំណើត</h3>
                    <form className='frm'>
                        <div className='facult-box2'>
                            <input type="date"/>
                        </div>
                    </form>
                </div>

                

                <div className='choose-faculty-wrapper'>
                    <h3>រូបភាពរបស់សិស្ស (៤ x ៦)</h3>
                    <form className='frm'>
                        <div className='facult-box2'>
                            <input type="file"/>
                        </div>
                    </form>
                </div>

                <div className='choose-faculty-wrapper'>
                    <h3>ទីកន្លែងកំណើត</h3>
                    <form className='frm'>
                        <div className='facult-box2'>
                            <input type="text" />
                        </div>
                    </form>
                </div>

                <div className='choose-faculty-wrapper'>
                    <h3>អុីមែល</h3>
                    <form className='frm'>
                        <div className='facult-box2'>
                            <input type="text" />
                        </div>
                    </form>
                </div>

                <div className='choose-faculty-wrapper'>
                    <h3>លេខទូរស័ព្ទ</h3>
                    <form className='frm'>
                        <div className='facult-box2'>
                            <input type="text" />
                        </div>
                    </form>
                </div>

                
                <div className='choose-faculty-wrapper'>
                    <h3>សម័យប្រឡសញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ</h3>
                    <form className='frm'>
                        <div className='facult-box2'>
                            <input type="date"/>
                        </div>
                    </form>
                </div>

                <div className='choose-faculty-wrapper'>
                    <h3>រូបភាពសញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ</h3>
                    <form className='frm'>
                        <div className='facult-box2'>
                            <input type="file"/>
                        </div>
                    </form>
                </div>

                <div className='btn-registion'>
                    
                        <span className='btn' onClick={preFormPage}>
                            ត្រឡប់ក្រោយ
                        </span>
                    

                    
                        <span className='btn' onClick={nextFormPage}>
                            ចុះឈ្មោះ
                        </span>
                    

                </div>

                


            </div>
        </section>)
};

export default FormRegistrationBackground;
