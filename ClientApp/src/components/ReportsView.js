import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReports } from '../actions';
import ReportsList from './reports/ReportsList';

class ReportsView extends Component {

  constructor(props) {
    super(props);
    this.props.fetchReports();
  }

  render() {
    if (this.props.reports && this.props.reports.length > 0) {
      return (
        <div>
          <h3>Bug Reports</h3>
          <ReportsList />
        </div>
      );
    }
    return <h4>There are no reports to show.</h4>;
  }
}

function mapStateToProps({ reports }) {
  return { reports };
}

export default connect(mapStateToProps, { fetchReports })(ReportsView);