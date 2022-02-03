import React from 'react';
import {MdOutlineClose} from 'react-icons/md';
import PhotoUpload from '../../images/photo-upload.jpg';
import '../styles/formPost.scss';
import {useActionContext} from '../contexts/actionContext';

const FacultyForm = () => {
  const {dashTitle, closeForm} = useActionContext();
  return (
      <form className="frm-post">
        <div className="frm-header">
          <h2>Post {dashTitle}</h2>
          <MdOutlineClose className="icon-close" onClick={closeForm} />
        </div>
        <div className="body">
          <div className="frm-control">
            <label htmlFor="txt-name">Name</label>
            <input type="text" name="txt-name" id="txt-name" placeholder="Enter name" />
          </div>
          <div className="frm-control">
            <label htmlFor="txt-subtitle">Subtitle</label>
            <input type="text" name="txt-subtitle" id="txt-subtitle" placeholder="Enter subtitle" />
          </div>
          <div className="frm-control">
            <label htmlFor="txt-des">Description</label>
            <textarea name="txt-des" id="txt-des" placeholder="Enter description"></textarea>
          </div>
          <div className="img-wrapper">
            <div className="single-img">
              <span>Photo Banner</span>
              <div className="img-box" style={{backgroundImage: `url("${PhotoUpload}")`}}>
                <input type="file" name="photo-banner" id="photo-banner" />
                <input type="text" hidden />
              </div>
            </div>
            <div className="single-img">
              <span>Photo About</span>
              <div className="img-box" style={{backgroundImage: `url("${PhotoUpload}")`}}>
                <input type="file" name="photo-banner" id="photo-banner" />
                <input type="text" hidden />
              </div>
            </div>
          </div>
        </div>
        <div className="frm-footer">
          <button type="button" className="btn-save">Save</button>
        </div>
      </form>
  );
};

export default FacultyForm;
