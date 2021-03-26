import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div className="form-group">
      <label style={{display: 'block'}}>{label}</label>
      <input {...input} className="form-control" style={{marginBottom: '5px'}} />
      <small className="text-danger" style={{marginBottom: '20px'}}>
        {touched && error}
      </small>
    </div>
  );
};