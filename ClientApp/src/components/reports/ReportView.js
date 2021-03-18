import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReport } from '../../actions';

class ReportView extends Component {
  constructor(props) {
    super(props);
    this.id = props.match.params.id;
    this.state = { loaded: false, report: {} };
  }

  componentDidMount() {
    this.props.fetchReport(this.id);
  }

  renderReport() {
    if (this.props.report) {
      return (
        <div>
          <p>{this.props.report.summary}</p>
        </div>
      );
    }
    return (<p>Nothing loaded yet</p>);
  }

  render() {
    return (
      <div>
        <h1>My ID is {this.id}</h1>
        {this.renderReport()}
      </div>
    );
  }
}

function mapStateToProps({ report }) {
  return { report };
}

export default connect(mapStateToProps, { fetchReport })(ReportView);