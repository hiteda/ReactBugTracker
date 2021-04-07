import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Landing from './components/Landing';
import ReportsView from './components/ReportsView';
import ReportView from './components/reports/ReportView';
import ReportNew from './components/reports/ReportNew';
import ReportEdit from './components/reports/ReportEdit';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Landing} />
        <Route exact path='/reports' component={ReportsView} />
        <Route exact path='/report/:id' component={ReportView} />
        <Route path='/report/edit/:id' component={ReportEdit} />
        <Route path='/reports/new' component={ReportNew} />
      </Layout>
    );
  }
}
