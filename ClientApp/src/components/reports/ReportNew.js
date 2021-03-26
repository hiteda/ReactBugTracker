import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import ReportForm from './ReportForm';
import ReportFormReview from './ReportFormReview'

class ReportNew extends Component {
  state = {
    showReview: false
  };

  render() {
    if (this.state.showReview) {
      return (
        <ReportFormReview onCancel={() => this.setState({ showReview: false })} />
      );
    }

    return (
      <ReportForm onReportSubmit={() => this.setState({ showReview: true })} />
    );
  }
}

export default reduxForm({
  form: 'reportForm'
})(ReportNew);