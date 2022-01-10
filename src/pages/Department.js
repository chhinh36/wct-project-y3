import React from 'react'
import {
    DepartmentBanner,
    DepartmentAbout,
    DepartmentLabActivity,
    DepartmentStudentArchievement,
    DepartmentResearch,
    DepartmentSchedule
} from '../components';

const Department = () => {
    return (
        <>
            <DepartmentBanner />
            <DepartmentAbout />
            <DepartmentLabActivity />
            <DepartmentStudentArchievement />
            <DepartmentResearch />
            <DepartmentSchedule />
        </>
    )
}

export default Department
