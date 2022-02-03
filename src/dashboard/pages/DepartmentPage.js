import React from 'react';
import {FaPlus} from 'react-icons/fa';
import {BiEdit} from 'react-icons/bi';
import {BsFillTrashFill} from 'react-icons/bs';
import '../styles/dashTable.scss';
import '../styles/dashFacultyDepart.scss';
import {useActionContext} from '../contexts/actionContext';

const DepartmentPage = () => {
  const {opendForm} = useActionContext();
  return (
    <div className="dash-department-wrapper">
      <div className="header-add">
        <button type="button" className="btn-add" onClick={opendForm}>
          <FaPlus className="icon" />
          <span>Add</span>
        </button>
      </div>
      <table className="dash-tbl">
        <tr>
          <th width="150">No.</th>
          <th className="col-txt">Name</th>
          <th>Photo Banner</th>
          <th width="100">Edit</th>
          <th width="100">Delte</th>
        </tr>
        {
          Array.from({length: 20}).map((_, index)=>{
            return (
              <tr key={index}>
                <td>1</td>
                <td className="col-txt">Information Technology Engineering</td>
                <td>
                  <div className="img-box">
                    <img src="https://scandasia.com/wp-content/uploads/2019/01/RUPP.jpg" alt="rupp" />
                  </div>
                </td>
                <td>
                  <button type="button" className="btn-edit">
                    <BiEdit className="icon" />
                  </button>
                </td>
                <td>
                  <button type="button" className="btn-delete">
                    <BsFillTrashFill className="icon" />
                  </button>
                </td>
              </tr>
            );
          })
        }
      </table>
    </div>
  );
};

export default DepartmentPage;
