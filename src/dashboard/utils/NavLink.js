import {FaThList, FaUniversity, FaUserGraduate, FaBullhorn, FaSpellCheck} from 'react-icons/fa';
export const sidebar = [
    {
        id: 1,
        text: "Dashboard",
        path: "",
        icon: <FaThList />
    },
    {
        id: 2,
        text: "Faculty",
        path: "faculty",
        icon: <FaUniversity />
    },
    {
        id: 3,
        text: "Department",
        path: "department",
        icon: <FaUserGraduate />
    },
    {
        id: 4,
        text: "Post",
        path: "post",
        icon: <FaBullhorn />
    },
    {
        id: 5,
        text: "Check Registration",
        path: "check-registration",
        icon: <FaSpellCheck />
    }
];