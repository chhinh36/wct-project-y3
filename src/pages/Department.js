import React from 'react'
import {
    DepartmentBanner,
    DepartmentAbout,
    DepartmentLabActivity,
    DepartmentStudentArchievement
} from '../components';

const Department = () => {
    return (
        <>
            <DepartmentBanner />
            <DepartmentAbout />
            <DepartmentLabActivity />
            <DepartmentStudentArchievement />
        </>
    )
}

export default Department
