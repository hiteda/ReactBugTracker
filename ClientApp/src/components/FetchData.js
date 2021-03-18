import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchReports } from '../actions';
import ReportsList from './reports/ReportsList';

class FetchData extends Component {

  constructor(props) {
    super(props);
    this.handleUserClick = this.handleUserClick.bind(this);
  }

  render() {
    return (
      <div>
        <h3>Bug Reports</h3>
        <ReportsList />
        <button type="button" className="btn btn-primary" onClick={this.handleUserClick}>Add a User</button>
      </div>
    );
  }

  async handleUserClick() {
    const response = await axios.post('/api/reports', {
      "summary": "Lalala",
      "details": "Wawawawa",
      "howFound": "SNOOOOoze!",
      "severity": 2
    });
    this.props.fetchReports();
  }
}

function mapStateToProps({ reports }) {
  return { reports };
}

export default connect(mapStateToProps, { fetchReports })(FetchData);