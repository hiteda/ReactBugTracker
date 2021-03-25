import React from 'react';
import SelectField from './SelectField';

export default ({ input, label, options, meta: { error, touched } }) => {
  if (options) {
    return <SelectField options={options} label={label} input={input} />;
  }
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