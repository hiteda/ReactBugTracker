import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import ReportForm from './ReportForm';

class ReportNew extends Component {
  state = {
    showReview: false
  };

  render() {
    if (this.state.showReview) {
      return (
        <div>Showing review</div>
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