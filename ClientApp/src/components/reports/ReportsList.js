import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchReports } from '../../actions';

class ReportsList extends Component {
  componentDidMount() {
    this.props.fetchReports();
  }

  renderReports() {
    return this.props.reports.map(report => {
      return (<div className="card" key={report.summary}>
        <div className="card-body">
          <Link to={`/reports/${report.id}`}><h4 className="card-title">{report.summary}</h4></Link>
          <div className="card-text">Severity: {report.severity}</div>
        </div>
      </div>);
    });
  }

  render() {
    return (
      <div>
        {this.renderReports()}
      </div>  
    );
  }
}

function mapStateToProps({ reports }) {
  return { reports };
}

export default connect(mapStateToProps, { fetchReports })(ReportsList);