import React, {useEffect} from 'react';
import {FaPlus} from 'react-icons/fa';
import {BiEdit} from 'react-icons/bi';
import {BsFillTrashFill} from 'react-icons/bs';
import PhotoUpload from '../../images/photo-upload.jpg';
import '../styles/dashFacultyDepart.scss';
import '../styles/dashTable.scss';
import {useActionContext} from '../contexts/actionContext';
import {useFacultyContext} from '../contexts/facultyContext';
import {toast} from 'react-toastify';

const FacultyPage = () => {
  const {opendForm} = useActionContext();
  const {
    fetchFaculty,
    loading,
    faculty,
    deleteFaculty,
    setInputFaculty,
    emptyInputFaculty,
    setEditFaculty,
    setPhotoBox,
    setFacultyEditId
  } = useFacultyContext();
  useEffect(()=>{
    fetchFaculty('/api/v1/faculty?sort=-createdAt');
    // eslint-disable-next-line
  }, []);

  const handleDeleteFaculty = async (facultyId) => {
    const {error, msg} = await deleteFaculty(facultyId);
    if(error){
      toast.error(msg);
    }else{
      toast.success(msg);
    }
  }

  const handleEdit = (facultyId) => {
    opendForm();
    const singleFaculty = faculty.find((item)=>item._id===facultyId);
    const {
      name,
      subtitle,
      description,
      photoBanner: {
        imageName: nameBanner,
        url: urlBanner
      },
      photoAbout: {
        imageName: nameAbout,
        url: urlAbout
      }
    } = singleFaculty;
    setInputFaculty({
      name,
      subtitle,
      description,
      photoBanner: {
          imageName: nameBanner,
          url: urlBanner
      },
      photoAbout: {
          imageName: nameAbout,
          url: urlAbout
      }
    });
    setPhotoBox({
      photoBanner: urlBanner,
      photoAbout: urlAbout
    })


  }
  const handleOpenForm = () => {
    setEditFaculty(false);
    opendForm();
    emptyInputFaculty();
    setPhotoBox({
      photoBanner: PhotoUpload,
      photoAbout: PhotoUpload
    })
  }
  const handleEditFaculty = (facultyId) => {
    setFacultyEditId(facultyId);
    setEditFaculty(true);
    handleEdit(facultyId);
  }

  if(loading){
    return (
      <div className="body-dash-loading">
        <div className="dash-loading"><div></div><div></div><div></div><div></div></div>
      </div>
    );
  }
  return (
      <div className="dash-faculty-wrapper">
        <div className="header-add">
          <button type="button" className="btn-add" onClick={handleOpenForm}>
            <FaPlus className="icon" />
            <span>Add</span>
          </button>
        </div>
        <table className="dash-tbl">
          <thead>
            <tr>
              <th width="150">No.</th>
              <th className="col-txt">Name</th>
              <th>Photo Banner</th>
              <th width="100">Edit</th>
              <th width="100">Delte</th>
            </tr>
          </thead>
          <tbody>
            {
              faculty.map((item, index)=>{
                const {_id: facultyId, name, photoBanner: {imageName, url: imageUrl}} = item;
                return (
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td className="col-txt">{name}</td>
                    <td>
                      <div className="img-box">
                        <img src={imageUrl} alt={imageName} />
                      </div>
                    </td>
                    <td>
                      <button type="button" className="btn-edit" onClick={()=>handleEditFaculty(facultyId)}>
                        <BiEdit className="icon" />
                      </button>
                    </td>
                    <td>
                      <button type="button" className="btn-delete" onClick={()=>handleDeleteFaculty(facultyId)}>
                        <BsFillTrashFill className="icon" />
                      </button>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
  )
};

export default FacultyPage;
