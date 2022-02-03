import React, {useState} from 'react'
import AcademicStaffInfo from './AcademicStaffInfo';
import 'react-slidedown/lib/slidedown.css'

const AcademicStaff = () => {
    const [showIndex, setShowIndex] = useState(0);
    const handleChange = (e, index) => {
        console.log(e.target);
        if(e.target.classList.contains('name-staff') || e.target.classList.contains('name')){
            setShowIndex(index)
        }
    }
    return (
        <section className="academic-staff en-font">
            <div className="global-wrapper academic-staff-wrapper">
                <div className="title">
                    <h3>Academic Staff</h3>
                </div>
                <div className="body">
                    <div className="left">

                        {
                            Array.from({length: 8}).map((itme, index)=>{
                                return (
                                    <div key={index} className={`${showIndex===index? 'single-item active':'single-item'}`} onClick={(e)=>handleChange(e, index)}>
                                        <div className="name">
                                            <h4 className="name-staff">Ngounphan Pheakdey, Dr.rer.nat.</h4>
                                        </div>
                                        <div className="sub-content">
                                            <AcademicStaffInfo />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="right">
                        <AcademicStaffInfo />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AcademicStaff
