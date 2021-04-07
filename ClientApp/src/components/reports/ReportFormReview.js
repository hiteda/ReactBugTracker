import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions';

const ReportReview = ({ onCancel, formValues, submitReport, history, id }) => {
  const reviewFields = _.map(formFields, ({ label, name }) => {
    return (
      <li className="list-group-item" key={name}>
        <h6>{label}</h6>
        <div>{formValues[name]}</div>
      </li>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      <div className="card">
        <ul className="list-group list-group-flush">
          {reviewFields}
        </ul>
      </div>
      <div style={{ marginTop: "20px" }} >
        <button className="btn btn-danger" onClick={onCancel} >Edit</button>
        <button className="btn btn-primary" style={{ marginLeft: "20px" }} onClick={() => submitReport(formValues, history, id)} >Submit</button>
      </div>
    </div>  
  );
}

function mapStateToProps(state) {
  return { formValues: state.form.reportForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(ReportReview));