import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import ReportField from './ReportField';
import formFields from './formFields';

class ReportForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name, type, options }) => {
      return <Field
        key={name}
        component={ReportField}
        type={type}
        label={label}
        options={options}
        name={name}
      />;
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onReportSubmit)}>
          {this.renderFields()}
          <Link to="/reports" className="btn btn-danger">Cancel</Link>
          <button type="submit" className="btn btn-primary float-right">Submit</button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(formFields, ({ name, label }) => {
    if (!values[name]) {
      errors[name] = 'Please provide a value for ' + label;
    }
  });

  return errors;
}

export default reduxForm({
  form: 'reportForm',
  validate,
  destroyOnUnmount: false,
  initialValues: {
    'howFound': 'Functional Test',
    'severity': 'Low'
  }
})(ReportForm);