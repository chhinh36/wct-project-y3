import React from 'react';
import {MdOutlineClose} from 'react-icons/md';
import PhotoUpload from '../../images/photo-upload.jpg';
import PhotoLoading from '../../images/image-loading.gif';
import '../styles/formPost.scss';
import {useActionContext} from '../contexts/actionContext';
import {useFacultyContext} from '../contexts/facultyContext';
import axios from 'axios';
import {toast} from 'react-toastify';

const FacultyForm = () => {
  const {
    createFaculty,
    create_loading,
    inputFaculty,
    emptyInputFaculty,
    setInputFaculty,
    photoBox,
    setPhotoBox,
    edit_faculty,
    updateFaculty,
    edit_facultyId
  } = useFacultyContext();
  const {dashTitle, closeForm} = useActionContext();
  


  const handleInputChange = (e) => {
    setInputFaculty({
      ...inputFaculty,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }


  const handleUploadFile = async (e) => {
    const fileInput = e.currentTarget;
    const formData = new FormData();
    formData.append('images', e.target.files[0]);
    fileInput.style.pointerEvents = "none";
    setPhotoBox({...photoBox, [fileInput.name]: PhotoLoading});
    try {
      const {data: {images}} = await axios({
        method: "post",
        url: "/api/v1/upload/upload-cloud",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" }
      });
      setInputFaculty({
        ...inputFaculty,
        [fileInput.name]: {
          imageName: images[0].name,
          url: images[0].url
        }
      });
      setPhotoBox({...photoBox, [fileInput.name]: images[0].url});
      setInputFaculty({...inputFaculty, [fileInput.name]: {imageName: images[0].name, url: images[0].url}});
      fileInput.value = "";
    } catch (error) {
      setPhotoBox({...photoBox, [fileInput.name]: PhotoLoading});
    }
    fileInput.style.pointerEvents = "auto";
  }

  // const handleUploadFile = async (e) => {
  //   const fileInput = e.currentTarget;
  //   const photoBox = fileInput.parentElement;
  //   const photoInputName = photoBox.querySelector('.photo-name');
  //   const photoInputUrl = photoBox.querySelector('.photo-url');
  //   const formData = new FormData();
  //   formData.append('images', e.target.files[0]);
  //   fileInput.style.pointerEvents = "none";
  //   photoBox.style.backgroundImage = `url(${PhotoLoading})`;
  //   try {
  //     const {data: {images}} = await axios({
  //       method: "post",
  //       url: "/api/v1/upload/upload-cloud",
  //       data: formData,
  //       headers: { "Content-Type": "multipart/form-data" }
  //     });
  //     setInputFaculty({
  //       ...inputFaculty,
  //       [fileInput.name]: {
  //         imageName: images[0].name,
  //         url: images[0].url
  //       }
  //     });
  //     photoBox.style.backgroundImage = `url(${images[0].url})`;
  //     photoInputName.value = images[0].name;
  //     photoInputUrl.value = images[0].url;
  //     fileInput.value = "";
  //   } catch (error) {
  //     photoBox.style.backgroundImage = `url(${PhotoUpload})`;
  //   }
  //   fileInput.style.pointerEvents = "auto";
  // }


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    let error;
    let msg;
    if(edit_faculty){
      const response = await updateFaculty(inputFaculty, edit_facultyId);
      error = response.error;
      msg = response.msg;
    }else{
      const response = await createFaculty(inputFaculty);
      error = response.error;
      msg = response.msg;
    }
    if(error){
      toast.error(msg);
    }else{
      emptyInputFaculty();
      setPhotoBox({
        photoBanner: PhotoUpload,
        photoAbout: PhotoUpload
      });
      closeForm();
      toast.success(msg);
    }
  }

  return (
      <form className="frm-post" onSubmit={handleFormSubmit}>
        <div className="frm-header">
          <h2>Post {dashTitle}</h2>
          <MdOutlineClose className="icon-close" onClick={closeForm} />
        </div>
        <div className="body">
          <div className="frm-control">
            <label htmlFor="name">Name</label>
            <input value={inputFaculty.name} type="text" name="name" id="name" placeholder="Enter name" onChange={handleInputChange} />
          </div>
          <div className="frm-control">
            <label htmlFor="subtitle">Subtitle</label>
            <input value={inputFaculty.subtitle} type="text" name="subtitle" id="subtitle" placeholder="Enter subtitle" onChange={handleInputChange} />
          </div>
          <div className="frm-control">
            <label htmlFor="description">Description</label>
            <textarea value={inputFaculty.description} name="description" id="description" placeholder="Enter description" onChange={handleInputChange}></textarea>
          </div>
          <div className="img-wrapper">
            <div className="single-img">
              <span>Photo Banner</span>
              <div className="img-box" style={{backgroundImage: `url("${photoBox.photoBanner}")`}}>
                <input type="file" name="photoBanner" id="photoBanner" onChange={handleUploadFile} />
                <input type="text" className="photo-name" value={inputFaculty.photoBanner.imageName} hidden readOnly />
                <input type="text" className="photo-url" value={inputFaculty.photoBanner.url} hidden readOnly />
              </div>
            </div>
            <div className="single-img">
              <span>Photo About</span>
              <div className="img-box" style={{backgroundImage: `url("${photoBox.photoAbout}")`}}>
                <input type="file" name="photoAbout" id="photoAbout" onChange={handleUploadFile} />
                <input type="text" className="photo-name" value={inputFaculty.photoAbout.imageName} hidden readOnly />
                <input type="text" className="photo-url" value={inputFaculty.photoAbout.url} hidden readOnly />
              </div>
            </div>
          </div>
        </div>
        <div className="frm-footer">
          <button type="submit" className="btn-save" style={{pointerEvents: create_loading?"none":"auto"}}>
            {
              create_loading? "loading...":edit_faculty?"Edit":"Save"
            }
          </button>
        </div>
      </form>
  );
};

export default FacultyForm;
