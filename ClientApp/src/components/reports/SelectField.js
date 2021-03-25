import _ from 'lodash';
import React from 'react';

const renderOptions = (options) => {
  return _.map(options, (option) => {
    return <option key={option}>{option}</option>;
  });
}

export default ({ input, options, label }) => {
  return (
    <div className="form-group">
      <label style={{ display: 'block' }}>{label}</label>
      <select {...input}>
        {renderOptions(options)}
      </select>
    </div>
  );
}