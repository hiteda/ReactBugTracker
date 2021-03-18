import React, { Component } from 'react';
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
          <h4 className="card-title">{report.summary}</h4>
          <div className="card-text">{report.details}</div>
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