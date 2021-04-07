import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchReport } from '../../actions';

class ReportView extends Component {
  constructor(props) {
    super(props);
    this.id = props.match.params.id;
  }

  componentDidMount() {
    this.props.fetchReport(this.id);
  }

  renderReportField(label, value) {
    return (
      <li className="list-group-item" key={label}>
        <h6>{label}</h6>
        <div>{value}</div>
      </li>  
    );
  }

  renderReport() {
    if (this.props.report) {
      return (
        <div>
          <h3>{this.props.report.summary}</h3>
          <div className="card">
          <ul className="list-group list-group-flush">
            {this.renderReportField('Description', this.props.report.details)}
            {this.renderReportField('How Found', this.props.report.howFound)}
            {this.renderReportField('Severity', this.props.report.severity)}
            </ul>
          </div>
        </div>
      );
    }
    return (<p>Nothing loaded yet</p>);
  }

  render() {
    return (
      <div>
        {this.renderReport()}
        <div style={{ marginTop: '10px' }}>
          <Link to="/reports" className="btn btn-warning">Back</Link>
          <Link to={`/report/edit/${this.id}`}
            className="btn btn-info"
            style={{ marginLeft: '20px' }}>
            Edit
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ report }) {
  return { report };
}

export default connect(mapStateToProps, { fetchReport })(ReportView);