import React, { Component } from 'react';
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

  renderReport() {
    if (this.props.report) {
      return (
        <div>
          <h6>{this.props.report.summary}</h6>
          <p>{this.props.report.details}</p>
        </div>
      );
    }
    return (<p>Nothing loaded yet</p>);
  }

  render() {
    return (
      <div>
        {this.renderReport()}
      </div>
    );
  }
}

function mapStateToProps({ report }) {
  return { report };
}

export default connect(mapStateToProps, { fetchReport })(ReportView);