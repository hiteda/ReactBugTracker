import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import TextField from './fields/TextField';
import TextareaField from './fields/TextareaField';
import SelectField from './fields/SelectField';
import formFields from './formFields';

class ReportForm extends Component {
  constructor(props) {
    super(props);
    // If report values were passed in, initialize to those values
    if (props.reportValues) {
      this.props.initialize(props.reportValues);
    }
  }

  getComponent(type) {
    switch (type) {
      case "select":
        return SelectField;
      case "textarea":
        return TextareaField;
      default:
        return TextField;
    }
  }

  renderFields() {
    return _.map(formFields, ({ label, name, type, options }) => {
      return <Field
        key={name}
        component={this.getComponent(type)}
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
          <button type="submit" className="btn btn-primary" style={{ 'marginLeft': '20px' }}>Submit</button>
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