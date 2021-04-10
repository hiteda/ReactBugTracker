import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchReport, deleteReport } from '../../actions';
import Modal from 'react-bootstrap/Modal'

class ReportView extends Component {
  state = {
    showAlert: false
  };

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
          <button className="btn btn-danger float-right" onClick={() => this.setState({ showAlert: true })} >Delete</button>
        </div>
        <Modal show={this.state.showAlert}>
          <Modal.Body>Are you sure you want to delete this report?</Modal.Body>
          <Modal.Footer>
            <button className="btn btn-primary"
              onClick={() => this.props.deleteReport(this.props.history, this.id)} >
              Yes
            </button>
            <button className="btn btn-primary"
              style={{ marginLeft: "10px" }}
              onClick={() => this.setState({ showAlert: false })} >
              No
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps({ report }) {
  return { report };
}

export default connect(mapStateToProps, { fetchReport, deleteReport })(ReportView);