import React from 'react';
import {MdOutlineClose} from 'react-icons/md';
import PhotoUpload from '../../images/photo-upload.jpg';
import '../styles/formPost.scss';
import {useActionContext} from '../contexts/actionContext';

const DepartmentForm = () => {
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
          <label htmlFor="txt-price">Price</label>
          <input type="number" name="txt-price" id="txt-price" placeholder="Enter price" />
        </div>
        <div className="frm-control">
          <label htmlFor="txt-faculty">Faculty</label>
          <select name="txt-faculty" id="txt-faculty">
            <option value="0">----- Please Select -----</option>
            <option value="1">Information Technology</option>
            <option value="1">Information Technology</option>
            <option value="1">Information Technology</option>
            <option value="1">Information Technology</option>
            <option value="1">Information Technology</option>
            <option value="1">Information Technology</option>
          </select>
        </div>
        <div className="frm-control">
          <label htmlFor="txt-des">Description</label>
          <textarea name="txt-des" id="txt-des" placeholder="Enter description"></textarea>
        </div>
        <div className="img-wrapper">
        <div className="single-img">
            <span>Image</span>
            <div className="img-box" style={{backgroundImage: `url("${PhotoUpload}")`}}>
              <input type="file" name="image-file" id="image-file" />
              <input type="text" hidden />
            </div>
          </div>
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

export default DepartmentForm;
