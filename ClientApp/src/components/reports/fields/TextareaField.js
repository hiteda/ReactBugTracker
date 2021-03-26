import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div className="form-group">
      <label style={{ display: 'block' }}>{label}</label>
      <textarea {...input} className="form-control" rows="3" style={{ marginBottom: '5px' }} />
      <small className="text-danger" style={{ marginBottom: '20px' }}>
        {touched && error}
      </small>
    </div>
  );
};