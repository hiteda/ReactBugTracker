import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import ReportForm from './ReportForm';
import ReportFormReview from './ReportFormReview';
import { connect } from 'react-redux';
import { fetchReport } from '../../actions';

class ReportEdit extends Component {
  state = {
    showReview: false
  };

  constructor(props) {
    super(props);
    this.id = this.props.match.params.id;
  }

  componentDidMount() {
    this.props.fetchReport(this.id);
  }

  render() {
    if (this.state.showReview) {
      return <ReportFormReview onCancel={() => this.setState({ showReview: false })} id={this.id} />;
    }

    if (!this.props.report) {
      return <h5>No report loaded yet...</h5>;
    }
    return <ReportForm reportValues={this.props.report} onReportSubmit={() => this.setState({ showReview: true })} />;
  }
}

function mapStateToProps({ report }) {
  return { report };
}

export default reduxForm({
  form: 'reportEditForm'
})(connect(mapStateToProps, { fetchReport })(ReportEdit));